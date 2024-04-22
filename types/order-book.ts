export interface OrderBook {
  lastUpdateId: number;
  bids: string[][];
  asks: string[][];
}

export interface OrderBookUpdate {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  U: number; // First update ID in event
  u: number; // Final update ID in event
  b: [
    // Bids to be updated
    [
      string, // Price level to be updated
      string // Quantity
    ]
  ];
  a: [
    // Asks to be updated
    [
      string, // Price level to be updated
      string // Quantity
    ]
  ];
}
