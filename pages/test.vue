<template>
  <div v-if="pending"><MainSkeleton /></div>

  <div v-else>
    <div class="md:h-96">
      <img
        :src="imageUrl"
        :alt="mainArticle.image.alternativeText"
        class="h-80 md:h-full w-full object-cover group-hover:brightness-75 transition duration-300 ease-in-out"
      />
    </div>
    <div class="mt-4">
      <p class="tag">
        {{ mainArticle.tag }}
      </p>
      <h2 class="font-cormorant font-semibold text-gray-900 text-3xl lg:text-5xl mt-2">
        {{ mainArticle.title }}
      </h2>
      <div v-for="block in mainArticle.blockText" :key="block.type">
        <p v-if="block.type === 'heading'" class="font-nunito mt-2 truncate">
          {{ block.children[0].text }}
        </p>
      </div>
      <p class="mt-2">
        <span class="signature">{{ mainArticle.author }} </span> |
        <span> {{ formatDate(mainArticle.date) }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import formatDate from "../utils/dateUtils";
import getImageUrl from "../utils/imageFormat";

const imageUrl = computed(() => getImageUrl(mainArticle.value, "medium"));

const { data: fetchMain, pending } = await useLazyFetch(import.meta.env.VITE_API_URL + `/api/articles?filters[main][$eq]=true&populate=image`, {
  transform: (_fetchMain) => _fetchMain.data[0],
  server: false,
});
const mainArticle = fetchMain;
</script>

<style scoped></style>
