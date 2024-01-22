<template>
  <div class="font-nunito">
    <div class="sm:px-80 md:px-80 lg:px-80 xl:px-80 py-12">
      <div class="flex justify-between gap-14">
        <div class="flex flex-col w-3/5" v-if="mainArticle">
          <MainArticle :mainArticle="mainArticle" />
        </div>

        <div class="flex flex-col gap-4" v-if="eventsArticles">
          <div v-for="eventArticle in eventsArticles.slice(0, 2)" :key="eventArticle.id">
            <EventArticles :eventArticle="eventArticle" />
          </div>
        </div>
      </div>
      <div class="flex gap-4 mt-12" v-if="remainingArticles">
        <div v-for="remainingArticle in remainingArticles.slice(0, 3)" :key="remainingArticle.id">
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
</script>
