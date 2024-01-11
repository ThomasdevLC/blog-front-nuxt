<template>
  <div class="px-48 py-12">
    <div v-for="article in articles" :key="article.id">
      <div class="w-full flex justify-around border-b-2 border-black py-8">
        <div class="w-3/5">
          <h2 class="font-title font-bold text-5xl mt-2">{{ article.title }}</h2>
          <p class="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
            expedita debitis, iure illum ea repellat fugiat id facere nam...
          </p>
          <p class="mt-2">
            <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
          </p>
          <div class="align-bottom">
            <NuxtLink :to="`/article/${article.id}`"
              ><p class="mt-4 text-2xl">Lire l'article <span class="material-symbols-outlined"> north_east </span></p>
            </NuxtLink>
          </div>
        </div>
        <div class="h-80 w-96">
          <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: fetchedData } = await useFetch("http://localhost:1337/api/articles?filters[tag][$eq]=Actualité&sort[0]=date:desc&populate=image");
const articles = fetchedData._rawValue.data;
</script>
