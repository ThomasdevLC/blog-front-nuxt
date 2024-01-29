<template>
  <NuxtLink :to="`/article/${remainingArticle.id}`">
    <img :src="'http://localhost:1337' + remainingArticle.image.url" :alt="remainingArticle.image.alternativeText" class="h-80 md:h-60 w-full object-cover" />
    <div class="pt-5">
      <p class="tag">{{ remainingArticle.tag }}</p>
      <h2 class="font-cormorant text-3xl mt-2">{{ remainingArticle.title }}</h2>
      <p class="mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid expedita
        debitis, iure illum ea repellat fugiat id facere nam...
      </p>
      <p class="mt-2">
        <span class="font-semibold">{{ remainingArticle.author }} </span> | {{ remainingArticle.date }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["remainingArticle"]);
</script>

<style lang="scss" scoped></style>
