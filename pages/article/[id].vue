<template>
  <NuxtLink :to="`/${link}`" v-if="article.tag">
    <div class="flex px-10 md:px-24 gap-4">
      <div class="rotate-180 w-10 flex items-center">
        <img src="../../assets//images/arrow_right.png" alt="flèche retour" />
      </div>
      <p class="text-2xl font-nunito font-semibold text-gray-900">{{ article.tag }}</p>
    </div>
  </NuxtLink>

  <div v-if="article" class="md:px-14 py-8 md:py-12">
    <div class="px-10 md:px-14 lg:px-72 xl:px-96">
      <h2 class="font-title text-4xl md:text-6xl font-cormorant">{{ article.title }}</h2>

      <div class="my-6 flex flex-col md:flex-row gap-4">
        <p>
          <span v-if="article.date" class="signature">{{ article.author }} </span> | {{ formatDate(article.date) }}
        </p>
        <p v-if="article.tag" class="tag">{{ article.tag }}</p>
      </div>
    </div>

    <div v-if="article.image" class="px-10 lg:px-48 xl:px-64 mt-8 mb-12">
      <img :src="getImageUrl(article.image.formats.large.url)" :alt="article.image.alternativeText" class="article-image object-cover" />
    </div>

    <div class="px-10 lg:px-72 xl:px-96" v-for="block in article.blockText" :key="block.type">
      <p v-if="block.type === 'heading'" class="font-cormorant text-3xl mb-4">{{ block.children[0].text }}</p>
      <div v-else-if="block.type === 'image'">
        <img
          v-if="block.image.formats.medium"
          :src="getImageUrl(block.image.formats.medium.url)"
          :alt="block.image.alternativeText"
          class="py-8 px-20 w-full object-cover"
        />
      </div>
      <div v-else v-for="child in block.children" :key="child.text">
        <p v-if="child.bold" class="font-bold text-xl mt-8 mb-4">{{ child.text }}</p>
        <span v-else-if="child.italic" class="italic text-gray-900">{{ child.text }}</span>
        <p v-else class="text-gray-900">{{ child.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import formatDate from "../../utils/dateUtils";
const apiUrl = import.meta.env.VITE_API_URL;

const getImageUrl = (path) => {
  return `${apiUrl}${path}`;
};

const { id } = useRoute().params;

const { data: fetchedArticle } = await useFetch(import.meta.env.VITE_API_URL + `/api/articles/${id}?&populate=image`, {
  transform: (_fetchedArticle) => _fetchedArticle.data,
});
const article = fetchedArticle;

const link = ref("");

if (article._rawValue.tag === "Evénements") {
  link.value = "events";
} else if (article._rawValue.tag === "Infos") {
  link.value = "infos";
} else if (article._rawValue.tag === "Actualités") {
  link.value = "news";
}

definePageMeta({
  layout: "single",
});
</script>

<style>
.article-image {
  max-height: 800px;
  width: 100%;
}
</style>
