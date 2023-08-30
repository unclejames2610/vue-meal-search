<template>
  <div class="flex flex-col p-8">
    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import axiosClient from "../axiosClient";

// const meals = computed(() => store.state.meals);

// console.log(letters);

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");

  console.log(response.data);
  ingredients.value = response.data;
});
</script>
