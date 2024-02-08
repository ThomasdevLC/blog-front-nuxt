<template>
  <NuxtLink :to="`/article/${remainingArticle.id}`">
    <div class="group">
      <img
        :src="'http://localhost:1337' + remainingArticle.image.url"
        :alt="remainingArticle.image.alternativeText"
        class="h-80 md:h-60 w-full object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
      />
      <div class="pt-5">
        <p class="tag">{{ remainingArticle.tag }}</p>
        <h2 class="font-cormorant font-semibold text-3xl mt-2">{{ remainingArticle.title }}</h2>
        <p class="mt-2">
          {{ remainingArticle.blockText[0].children[0].text }}
        </p>

        <p class="mt-2">
          <span class="signature">{{ remainingArticle.author }} </span> | {{ formatDate(remainingArticle.date) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
import formatDate from "../utils/dateUtils";

const props = defineProps(["remainingArticle"]);
</script>

<style lang="scss" scoped></style>
