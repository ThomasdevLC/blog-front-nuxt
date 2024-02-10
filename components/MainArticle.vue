<template>
  <NuxtLink :to="`/article/${mainArticle.id}`" class="group">
    <div class="md:h-96">
      <img
        :src="'http://localhost:1337' + mainArticle.image.url"
        :alt="mainArticle.image.alternativeText"
        class="h-80 md:h-full w-full object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
      />
    </div>
    <div class="mt-4 md:mt-8">
      <p class="tag">{{ mainArticle.tag }}</p>
      <h2 class="font-cormorant font-semibold text-gray-900 text-3xl lg:text-5xl mt-2">{{ mainArticle.title }}</h2>
      <div v-for="block in mainArticle.blockText" :key="block.type">
        <p v-if="block.type === 'heading'" class="font-nunito mt-2 truncate">{{ block.children[0].text }}</p>
      </div>
      <p class="mt-2">
        <span class="signature">{{ mainArticle.author }} </span> | {{ formatDate(mainArticle.date) }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import formatDate from "../utils/dateUtils";
const props = defineProps(["mainArticle"]);
</script>

<style lang="scss" scoped></style>
