<template>
  <div class="font-nunito">
    <div class="sm:px-80 md:px-80 lg:px-80 xl:px-80 py-12">
      <div class="flex justify-between gap-14">
        <div class="flex flex-col w-3/5" v-if="mainArticle">
          <MainArticle :mainArticle="mainArticle" />
        </div>

        <div class="flex flex-col gap-4" v-if="eventsArticles">
          <div v-for="eventArticle in eventsArticles.slice(0, 2)" :key="eventArticle.id">
            <NuxtLink :to="`/article/${eventArticle.id}`">
              <div class="relative text-white h-64">
                <img :src="'http://localhost:1337' + eventArticle.image.url" :alt="eventArticle.image.alternativeText" class="h-full w-full object-cover" />
                <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
                  <div class="p-5">
                    <p class="tag-second">{{ eventArticle.tag }}</p>
                    <h2 class="font-cormorant font-bold text-2xl mt-2">{{ eventArticle.title }}</h2>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="flex gap-4 mt-12" v-if="remainingArticles">
        <div v-for="article in remainingArticles.slice(0, 3)" :key="article.id">
          <NuxtLink :to="`/article/${article.id}`">
            <img :src="'http://localhost:1337' + article.image.url" :alt="article.image.alternativeText" class="h-80 w-full object-cover" />
            <div class="pt-5">
              <p class="tag">{{ article.tag }}</p>
              <h2 class="font-cormorant font-bold text-3xl mt-2">{{ article.title }}</h2>
              <p class="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laudantium aspernatur voluptatibus. Ad natus laborum placeat eum delectus aliquid
                expedita debitis, iure illum ea repellat fugiat id facere nam...
              </p>
              <p class="mt-2">
                <span class="font-semibold">{{ article.author }} </span> | {{ article.date }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: fetchedMain } = await useFetch("http://localhost:1337/api/articles?filters[main][$eq]=true&populate=image", {
  server: false,
  transform: (_fetchedMain) => _fetchedMain.data[0],
});
const mainArticle = fetchedMain;

const { data: fetchedRemaining } = await useFetch(
  "http://localhost:1337/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image",
  {
    server: false,
    transform: (_fetchedRemaining) => _fetchedRemaining.data,
  }
);
const remainingArticles = fetchedRemaining;

const { data: fetchedEvents } = await useFetch("http://localhost:1337/api/articles?filters[tag][$eq]=Evénements&sort[0]=date:desc&populate=image", {
  server: false,
  transform: (_fetchedEvents) => _fetchedEvents.data,
});
const eventsArticles = fetchedEvents;
</script>
