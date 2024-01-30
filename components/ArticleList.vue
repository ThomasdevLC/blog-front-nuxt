<template>
  <div class="w-full flex flex-col md:flex-row md:gap-8 justify-around border-b border-black py-8">
    <div class="w-full md:w-3/5">
      <h2 class="font-cormorant text-3xl lg:text-5xl md:mt-2">{{ article.title }}</h2>
      <p class="mt-2 font-nunito truncate">{{ article.text }}</p>
      <p class="mt-2">
        <span class="font-semibold">{{ article.author }} </span> | {{ formatDate(article.date) }}
      </p>
      <div class="align-bottom">
        <NuxtLink :to="`/article/${article.id}`"><p class="mt-4 mb-4 text-xl">Lire l'article</p> </NuxtLink>
      </div>
    </div>
    <div class="h-64 md:w-96">
      <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-full w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import formatDate from "../utils/dateUtils";
const props = defineProps(["article"]);
</script>

<style scoped>
/*  */
</style>
