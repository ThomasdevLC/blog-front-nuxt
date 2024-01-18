<template>
  <div v-if="article" class="px-96 py-12">
    <h2 class="font-title font-bold text-5xl mt-4">{{ article.title }}</h2>

    <div class="my-6 flex gap-4">
      <p>
        <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
      </p>
      <p class="tag">{{ article.tag }}</p>
    </div>
    <div class="my-8">
      <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-full w-full object-cover" />
    </div>

    <p>{{ article.text }}</p>
  </div>
  <div v-else>chargement ...</div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `http://localhost:1337/api/articles/${id}?&populate=image`;

const { data: fetchedSingleArticle } = await useFetch(uri, {
  server: false,
  transform: (_fetchedData) => _fetchedData.data,
});
const article = fetchedSingleArticle;

console.log(article);
</script>
