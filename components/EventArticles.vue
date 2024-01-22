<template>
  <NuxtLink :to="`/article/${eventArticle.id}`">
    <div class="relative text-white h-64">
      <img :src="'http://localhost:1337' + eventArticle.image.url" :alt="eventArticle.image.alternativeText" class="h-full w-full object-cover" />
      <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
        <div class="p-5">
          <p class="tag-second">{{ eventArticle.tag }}</p>
          <h2 class="font-cormorant font-bold text-2xl mt-2">{{ eventArticle.title }}</h2>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["eventArticle"]);
</script>

<style lang="scss" scoped></style>
