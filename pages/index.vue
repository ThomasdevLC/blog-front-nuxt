<template>
  <div class="font-nunito">
    <div class="px-8 md:px-12 lg:px-40 xl:px-96 py-4">
      <div class="flex justify-between gap-6 flex-col md:flex-row">
        <div class="flex flex-col w-full md:w-3/5" v-if="mainArticle">
          <MainArticle :mainArticle="mainArticle" />
        </div>

        <div class="flex flex-col gap-4" v-if="eventsArticles">
          <div v-for="eventArticle in eventsArticles.slice(0, 2)" :key="eventArticle.id">
            <EventArticles :eventArticle="eventArticle" />
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row mt-10 space-x-4" v-if="remainingArticles">
        <div class="w-full md:w-1/3" v-for="remainingArticle in remainingArticles.slice(0, 3)" :key="remainingArticle.id">
          <RemainingArticles :remainingArticle="remainingArticle" />
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

const { data: fetchedEvents } = await useFetch("http://localhost:1337/api/articles?filters[tag][$eq]=Evénements&sort[0]=date:desc&populate=image", {
  server: false,
  transform: (_fetchedEvents) => _fetchedEvents.data,
});
const eventsArticles = fetchedEvents;

const { data: fetchedRemaining } = await useFetch(
  "http://localhost:1337/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image",
  {
    server: false,
    transform: (_fetchedRemaining) => _fetchedRemaining.data,
  }
);
const remainingArticles = fetchedRemaining;
console.log(remainingArticles);
</script>
