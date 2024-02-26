<template>
  <div class="w-full flex flex-col md:flex-row md:gap-8 justify-around border-b border-black py-8">
    <div class="w-full md:w-3/5">
      <h2 class="font-cormorant font-title text-gray-900 text-3xl lg:text-5xl md:mt-2 mb-4">{{ article.title }}</h2>
      <div v-for="block in article.blockText" :key="block.type">
        <p v-if="block.type === 'heading'" class="font-nunito truncate">{{ block.children[0].text }}</p>
      </div>
      <p class="mt-2">
        <span class="signature">{{ article.author }} </span> | {{ formatDate(article.date) }}
      </p>
      <div class="align-bottom">
        <NuxtLink :to="`/article/${article.id}`">
          <div class="flex space-x-3 group">
            <p class="mt-4 mb-4 text-xl link">Lire l'article</p>
            <div class="w-6 flex justify-center items-center transition-transform transform translate-x-0 group-hover:translate-x-1">
              <img src="../assets/images/arrow_right.png" alt="Description de l'image" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="h-64 md:w-96">
      <img :src="imageUrl" :alt="article.image.alternativeText" class="h-full w-full object-cover" />
    </div>
  </div>
</template>

<script setup>
import formatDate from "../utils/dateUtils";
import getImageUrl from "../utils/imageFormat";

const props = defineProps(["article"]);
const imageUrl = computed(() => getImageUrl(props.article, "medium"));
</script>

<style scoped>
/*  */
</style>
