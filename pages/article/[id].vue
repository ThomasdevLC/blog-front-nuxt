<template>
  <NuxtLink :to="`/${link}`" v-if="article.tag">
    <p>retour {{ article.tag }}</p>
  </NuxtLink>

  <div v-if="article" class="px-96 py-12">
    <div class="px-32">
      <h2 class="font-title text-6xl mt-4 font-cormorant">{{ article.title }}</h2>

      <div class="my-6 flex gap-4">
        <p>
          <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
        </p>
        <p v-if="article.tag" class="tag">{{ article.tag }}</p>
      </div>
    </div>

    <div class="my-8">
      <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="max-h-96 w-full object-cover" />
    </div>

    <div class="px-32" v-for="block in article.blockText" :key="block.type">
      <p v-if="block.type === 'heading'" class="font-cormorant text-3xl mb-4">{{ block.children[0].text }}</p>
      <span v-else v-for="child in block.children" :key="child.text">
        <p v-if="child.bold" class="font-bold text-xl mt-8 mb-4">{{ child.text }}</p>
        <span v-else-if="child.italic" class="italic text-gray-900">{{ child.text }}</span>
        <p v-else class="text-gray-900">{{ child.text }}</p>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { id } = useRoute().params;
const uri = `http://localhost:1337/api/articles/${id}?&populate=image`;

const { data: fetchedSingleArticle } = await useFetch(uri, {
  server: false,
  transform: (_fetchedSingleArticle) => _fetchedSingleArticle.data,
});
const article = fetchedSingleArticle;

const link = ref("");

if (article._rawValue.tag === "Evénements") {
  link.value = "events";
} else if (article._rawValue.tag === "Infos") {
  link.value = "infos";
} else if (article._rawValue.tag === "Actualités") {
  link.value = "news";
}

console.log(article._rawValue.blockText);

definePageMeta({
  layout: "single",
});
</script>
