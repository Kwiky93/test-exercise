<template>
  <v-container class="flex-column flex-1-1 d-flex overflow-hidden">
    <v-select
      class="flex-0-1"
      label="Select"
      :items="items"
      v-model="selected"
      item-title="title"
      item-value="value" />

    <v-table class="flex-1-1 overflow-hidden" fixed-header>
      <thead>
        <tr>
          <th class="text-left">Setting</th>
          <th class="text-left">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderBookStore.historySymbol">
          <td>{{ item.pair }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
const orderBookStore = useOrderBook();
definePageMeta({
  layout: "header",
});

const items = [
  { title: "BTCUSDT", value: { rest: "BTCUSDT", ws: "btcusdt" } },
  { title: "BNBBTC", value: { rest: "BNBBTC", ws: "bnbbtc" } },
  { title: "ETHBTC", value: { rest: "ETHBTC", ws: "ethbtc" } },
];

const selected = computed({
  get() {
    return orderBookStore.symbol;
  },
  set(newValue) {
    orderBookStore.setSymbol(newValue);
  },
});
</script>
