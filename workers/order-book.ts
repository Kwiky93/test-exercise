import type { OrderBookUpdate } from "~/types/order-book";

let webSocket = null as WebSocket | null;
let prevMessage = null as OrderBookUpdate | null;

onmessage = function (event) {
  const { symbol, lastUpdateId, asks, bids } = event.data;
  let result = {};

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
      result = updateBook(payload, { asks, bids });
    }
    if (!!prevMessage && payload.U == prevMessage.u + 1) {
      result = updateBook(payload, { asks, bids });
    }
    prevMessage = payload;
    this.postMessage(result);
  };
};

function updateBook(
  payload: OrderBookUpdate,
  context: { asks: string[][]; bids: string[][] }
) {
  // const t0 = performance.now();

  payload.a.sort(
    //по возрастанию
    (a: string[], b: string[]) => parseFloat(a[0]) - parseFloat(b[0])
  );
  const asks = newUpdateRecords(payload.a, context.asks);

  payload.b.sort(
    //по убыванию
    (a: string[], b: string[]) => parseFloat(b[0]) - parseFloat(a[0])
  );
  const bids = newUpdateRecords(payload.b, context.bids, false);

  // const t1 = performance.now();
  // console.log("Took", (t1 - t0).toFixed(4), "milliseconds");
  return { asks, bids };
}

function newUpdateRecords(
  payload: string[][],
  base: string[][],
  isAsc: boolean = true
) {
  const newBase = [];

  const b_iterator = base[Symbol.iterator]();
  const p_iterator = payload[Symbol.iterator]();

  let b_pare = b_iterator.next();
  let p_pare = p_iterator.next();

  while (!p_pare.done || !b_pare.done) {
    if (b_pare.done) {
      newBase.push(p_pare.value);
      p_pare = p_iterator.next();
    } else if (p_pare.done) {
      newBase.push(b_pare.value);
      b_pare = b_iterator.next();
    } else if (
      isAsc
        ? b_pare.value[0] < p_pare.value[0]
        : b_pare.value[0] > p_pare.value[0]
    ) {
      newBase.push(b_pare.value);
      b_pare = b_iterator.next();
    } else if (b_pare.value[0] === p_pare.value[0]) {
      if (parseFloat(p_pare.value[1]) != 0) {
        newBase.push(p_pare.value);
      }
      b_pare = b_iterator.next();
      p_pare = p_iterator.next();
    } else {
      newBase.push(p_pare.value);
      p_pare = p_iterator.next();
    }
  }

  return newBase;
}
