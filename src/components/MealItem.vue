<template>
  <div class="bg-white shadow rounded-xl cursor-pointer hover:scale-105">
    <router-link
      :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
      class="cursor-pointer"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore eius
        accusamus excepturi commodi delectus ut s
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
        <!-- <router-link to="/" class="px-3 py-2 rounded border-2 border-purple-600 bg-purple-500 text-white hover:bg-purple-600 transition-colors"> View </router-link> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";

const { meal } = defineProps({
  meal: Object,
});
</script>
