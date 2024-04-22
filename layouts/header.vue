<template>
  <div class="d-flex flex-column h-screen">
    <v-toolbar color="primary">
      <div class="ml-6 mr-6">
        <v-icon icon="$vuetify"></v-icon>
      </div>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab v-for="item in tabs" :value="item.item" :to="item.to">
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <slot class="flex-1-1"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const tab = ref(route.path);

const tabs = [
  { item: "index", title: "Settings", to: "./" },
  { item: "order-book", title: "Order Book", to: "./order-book" },
];
</script>
