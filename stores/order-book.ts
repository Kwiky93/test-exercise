import { defineStore } from "pinia";
import type { OrderBook } from "~/types/order-book";

export const useOrderBook = defineStore("orderBook", {
  state: () => ({
    symbol: { rest: "BTCUSDT", ws: "btcusdt" } as { rest: string; ws: string },
    webSocket: null as WebSocket | null,
    asks: [] as string[][],
    bids: [] as string[][],
    lastUpdateId: 0,
    orderBookWorker: null as Worker | null,
    historySymbol: [] as Array<{ pair: string; time: string }>,
    selectedCounts: 1000,
  }),

  actions: {
    setSymbol(pair: { rest: string; ws: string }) {
      this.symbol = pair;
      this.historySymbol.push({
        pair: pair.rest,
        time: new Date().toLocaleTimeString(),
      });
      this.updateBook();
    },
    async updateBook() {
      $fetch(
        `https://api3.binance.com/api/v3/depth?symbol=${this.symbol.rest}&limit=1000`
      ).then((response) => {
        const _response = response as OrderBook;
        this.asks = _response.asks;
        this.bids = _response.bids;
        this.lastUpdateId = _response.lastUpdateId;
        this.setWorkerDepth();
      });
    },
    setWorkerDepth() {
      if (this.orderBookWorker) {
        this.orderBookWorker.terminate();
      }
      this.orderBookWorker = new Worker(
        new URL("@/workers/order-book.ts", import.meta.url)
      );
      const worker = this.orderBookWorker;

      const context = JSON.parse(JSON.stringify(this));
      worker.postMessage({
        lastUpdateId: context.lastUpdateId,
        symbol: context.symbol,
        asks: context.asks,
        bids: context.bids,
      });
      worker.onmessage = (message) => {
        this.asks = message.data.asks;
        this.bids = message.data.bids;
      };
    },
  },
  getters: {
    getBids(state) {
      return state.bids.slice(0, state.selectedCounts);
    },
    getAsks(state) {
      return state.asks.slice(0, state.selectedCounts);
    },
  },
});
