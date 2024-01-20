<template>
  <NuxtLink :to="`/${link}`" v-if="article.tag">
    <p>retour {{ article.tag }}</p>
  </NuxtLink>

  <div v-if="article" class="px-96 py-12">
    <h2 class="font-title font-bold text-5xl mt-4 font-cormorant">{{ article.title }}</h2>

    <div class="my-6 flex gap-4">
      <p>
        <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
      </p>
      <p v-if="article.tag" class="tag">{{ article.tag }}</p>
    </div>
    <div class="my-8">
      <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="max-h-96 w-full object-cover" />
    </div>

    <p>{{ article.text }}</p>
    <div v-for="block of article.blockText" :key="block.type">
      <template v-if="block.type === 'paragraph'">
        <p>
          <span v-for="child in block.children" :key="child.text">
            <span v-if="child.bold" class="font-bold">{{ child.text }}</span>
            <span v-else-if="child.italic" class="italic">{{ child.text }}</span>
            <span v-else>{{ child.text }}</span>
          </span>
        </p>
      </template>
    </div>
  </div>
  <div v-else>chargement ...</div>
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

console.log(article._rawValue);

definePageMeta({
  layout: "single",
});
</script>
