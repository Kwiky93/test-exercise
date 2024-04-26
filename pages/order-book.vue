<template>
  <v-container class="flex-column flex-1-1 d-flex overflow-hidden">
    <v-row class="flex-0-1">
      <v-col>
        <v-text-field
          label="Symbol"
          v-model="orderBookStore.symbol.rest"
          density="compact"
          disabled>
        </v-text-field>
      </v-col>
      <v-col>
        <v-select
          class="flex-0-1"
          :items="tableCountsSelect"
          v-model="orderBookStore.selectedCounts"
          density="compact" />
      </v-col>
    </v-row>
    <v-row class="flex-1-1 overflow-hidden mt-0">
      <v-col class="d-flex flex-wrap h-100 pt-0">
        <!-- {{ mobile }} {{ !mobile ? [{ title: "Quantity", key: "[1]" }] : [] }}
        <br />{{ headers }} -->

        <!-- <v-data-table-virtual
          :headers="headers"
          :items="orderBookStore.getAsks"
          class="overflow-x-hidden text-red-lighten-1"
          :class="[mobile ? 'w-100' : 'w-50', mobile ? 'h-50' : 'h-100']"
          density="compact"
          fixed-header>
        </v-data-table-virtual> -->
        <v-table
          class="overflow-x-hidden text-red-lighten-1"
          :class="[mobile ? 'w-100' : 'w-50', mobile ? 'h-50' : 'h-100']"
          density="compact"
          fixed-header>
          <thead>
            <tr>
              <th>Price</th>
              <th class="d-none d-md-flex">Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderBookStore.getAsks">
              <td>{{ item[0] }}</td>
              <td class="d-none d-md-flex">{{ item[1] }}</td>
              <td>{{ calcTotal(item[0], item[1]) }}</td>
            </tr>
          </tbody>
        </v-table>

        <!-- <v-data-table-virtual
          :headers="headers"
          :items="orderBookStore.getBids"
          :class="[mobile ? 'w-100' : 'w-50', mobile ? 'h-50' : 'h-100']"
          class="overflow-x-hidden text-green-lighten-1"
          density="compact"
          fixed-header>
        </v-data-table-virtual> -->

        <v-table
          :class="[mobile ? 'w-100' : 'w-50', mobile ? 'h-50' : 'h-100']"
          class="overflow-x-hidden text-green-lighten-1"
          density="compact"
          fixed-header>
          <thead>
            <tr>
              <th>Price</th>
              <th class="d-none d-md-flex">Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody class="overflow-auto">
            <tr v-for="item in orderBookStore.getBids">
              <td>{{ item[0] }}</td>
              <td class="d-none d-md-flex">{{ item[1] }}</td>
              <td>{{ calcTotal(item[0], item[1]) }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "header",
});

const orderBookStore = useOrderBook();

function calcTotal(price: string, quantity: string) {
  return (parseFloat(price) * parseFloat(quantity)).toFixed(5);
}

const tableCountsSelect = [100, 500, 1000];
const mobile = computed(() => useDisplay().xs);

const headers = [
  { title: "Price", key: "[0]", sortable: true },
  {
    title: "Quantity",
    key: "[1]",
    sortable: false,
  },
  {
    title: "Total",
    key: "total",
    sortable: false,
    value: (item: string[]) => calcTotal(item[0], item[1]),
  },
];
</script>
