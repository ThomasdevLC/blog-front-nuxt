<template>
  <div class="md:h-96">
    <img :src="'http://localhost:1337' + mainArticle.image.url" :alt="mainArticle.image.alternativeText" class="h-80 md:h-full w-full object-cover" />
  </div>
  <NuxtLink :to="`/article/${mainArticle.id}`">
    <div class="mt-4 md:mt-8">
      <p class="tag">{{ mainArticle.tag }}</p>
      <h2 class="font-cormorant text-3xl lg:text-5xl mt-2">{{ mainArticle.title }}</h2>
      <p class="mt-2 truncate">
        {{ mainArticle.text }}
      </p>
      <p class="mt-2">
        <span class="font-semibold">{{ mainArticle.author }} </span> | {{ mainArticle.date }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["mainArticle"]);
</script>

<style lang="scss" scoped></style>
