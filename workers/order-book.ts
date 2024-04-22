import type { OrderBookUpdate } from "~/types/order-book";

let webSocket = null as WebSocket | null;
let prevMessage = null as OrderBookUpdate | null;

onmessage = function (event) {
  const { symbol, lastUpdateId, asks, bids } = event.data;

  if (webSocket) {
    webSocket.close(1000, "Work complete");
  }
  webSocket = new WebSocket(
    `wss://stream.binance.com:9443/ws/${symbol.ws}@depth`
  );
  webSocket.onmessage = (event) => {
    const payload = JSON.parse(event.data) as OrderBookUpdate;
    if (payload.u <= lastUpdateId) return;

    if (
      !prevMessage &&
      payload.U <= lastUpdateId + 1 &&
      payload.u >= lastUpdateId + 1
    ) {
      updateBook(payload, { asks, bids });
    }
    if (!!prevMessage && payload.U == prevMessage.u + 1) {
      updateBook(payload, { asks, bids });
    }
    prevMessage = payload;
    this.postMessage({ asks, bids });
  };
};

function updateBook(
  payload: OrderBookUpdate,
  context: { asks: string[][]; bids: string[][] }
) {
  updateRecords(payload.a, context.asks);
  updateRecords(payload.b, context.bids);
}

function updateRecords(payload: string[][], context: string[][]) {
  payload.forEach((element: string[]) => {
    updateRecord(context, element);
  });
  context.sort(
    (a: string[], b: string[]) => parseFloat(b[0]) - parseFloat(a[0])
  );
}

function updateRecord(context: string[][], newValue: string[]) {
  const index = context.findIndex((record) => record[0] == newValue[0]);

  if (index >= 0) {
    if (!!parseFloat(newValue[1])) {
      context[index][1] = newValue[1];
    } else {
      context.splice(index, 1);
    }
  } else {
    if (!!parseFloat(newValue[1])) {
      context.push(newValue);
    }
  }

  return context;
}
