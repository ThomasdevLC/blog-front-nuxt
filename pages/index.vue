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
  <footer class="mt-6 py-8 flex-col bg-primary bg-opacity-10 items-center justify-center text-center">
    <p class="text-2xl lg:text-3xl font-PPRader text-primary">Amitiés Taléa</p>
    <div class="flex items-center justify-center gap-4">
      <div class="w-8">
        <img src="../assets/images/facebook.png" alt="logo facebook" />
      </div>
      <div class="w-8">
        <img src="../assets/images/mail.png" alt="logo facebook" />
      </div>
    </div>
    <p class="text-primary font-nunito mt-2">02 97 75 31 73</p>
  </footer>
</template>

<script setup>
const { data: fetchMain } = await useFetch(import.meta.env.VITE_API_URL + `/api/articles?filters[main][$eq]=true&populate=image`, {
  transform: (_fetchMain) => _fetchMain.data[0],
});
const mainArticle = fetchMain;

const { data: fetchEvents } = await useFetch(import.meta.env.VITE_API_URL + `/api/articles?filters[tag][$eq]=Evénements&sort[0]=date:desc&populate=image`, {
  transform: (_fetchEvents) => _fetchEvents.data,
});
const eventsArticles = fetchEvents;

const { data: fetchRemaining } = await useFetch(
  import.meta.env.VITE_API_URL + `/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image`,
  {
    transform: (_fetchRemaining) => _fetchRemaining.data,
  }
);
const remainingArticles = fetchRemaining;
</script>
