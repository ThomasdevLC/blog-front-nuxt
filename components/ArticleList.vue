<!-- ArticleCard.vue -->
<template>
  <div class="w-full flex justify-around border-b-2 border-black py-8">
    <div class="w-3/5">
      <h2 class="font-title font-bold text-5xl mt-2">{{ article.title }}</h2>
      <p class="mt-2 truncate">{{ article.text }}</p>
      <p class="mt-2">
        <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
      </p>
      <div class="align-bottom">
        <NuxtLink :to="`/article/${article.id}`"
          ><p class="mt-4 text-2xl">Lire l'article <span class="material-symbols-outlined"> north_east </span></p>
        </NuxtLink>
      </div>
    </div>
    <div class="h-64 w-96">
      <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-full w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["article"]);
</script>

<style scoped>
/* Add any scoped styles if needed */
</style>
