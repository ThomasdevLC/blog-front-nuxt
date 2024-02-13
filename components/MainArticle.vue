<template>
  <NuxtLink :to="`/article/${mainArticle.id}`" class="group">
    <div class="md:h-96">
      <img
        :src="imageUrl"
        :alt="mainArticle.image.alternativeText"
        class="h-80 md:h-full w-full object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
      />
    </div>
    <div class="mt-4 md:mt-8">
      <p class="tag group-hover:text-primary border px-3 inline-block border-primary rounded-xl transition duration-300 ease-in-out border-3px">
        {{ mainArticle.tag }}
      </p>
      <h2 class="font-cormorant font-semibold text-gray-900 text-3xl lg:text-5xl mt-2 group-hover:text-primary transition duration-300 ease-in-out">
        {{ mainArticle.title }}
      </h2>
      <div v-for="block in mainArticle.blockText" :key="block.type">
        <p v-if="block.type === 'heading'" class="font-nunito mt-2 truncate group-hover:text-primary transition duration-300 ease-in-out">
          {{ block.children[0].text }}
        </p>
      </div>
      <p class="mt-2">
        <span class="signature group-hover:text-primary transition duration-300 ease-in-out">{{ mainArticle.author }} </span> |
        <span class="group-hover:text-primary transition duration-300 ease-in-out"> {{ formatDate(mainArticle.date) }}</span>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup>
import formatDate from "../utils/dateUtils";
const props = defineProps(["mainArticle"]);
const imageUrl = computed(() => import.meta.env.VITE_API_URL + props.mainArticle.image.formats.medium.url);
</script>

<style lang="scss" scoped></style>
