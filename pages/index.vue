<template>
  <div class="font-nunito">
    <div class="px-10 md:px-12 lg:px-40 xl:px-96">
      <div class="flex justify-between gap-6 flex-col md:flex-row">
        <div class="flex flex-col w-full md:w-3/5">
          <div v-if="pending"><MainSkeleton /></div>
          <div v-else><MainArticle :mainArticle="mainArticle" /></div>
        </div>

        <div class="flex flex-col gap-4 w-full md:w-2/5" v-if="eventsArticles">
          <div v-for="eventArticle in eventsArticles.slice(0, 2)" :key="eventArticle.id">
            <div v-if="pending"><EventSkeleton /></div>
            <div v-else><EventArticles :eventArticle="eventArticle" /></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-8 items-center md:flex-row mt-10 space-x-4 md:space-y-0 md:items-start" v-if="remainingArticles">
        <div class="w-full md:w-1/3" v-for="remainingArticle in remainingArticles.slice(0, 3)" :key="remainingArticle.id">
          <RemainingArticles :remainingArticle="remainingArticle" />
        </div>
      </div>
    </div>
  </div>
  <footer class="md:mt-6 py-6 flex-col items-center justify-center text-center">
    <p class="text-2xl lg:text-3xl font-PPRader text-primary">Amitiés Taléa</p>
    <div class="flex items-center justify-center gap-4">
      <div class="w-8">
        <NuxtLink :to="'https://www.facebook.com/100069517452336/posts/530534393967559/'">
          <img src="../assets/images/facebook.png" alt="logo facebook" />
        </NuxtLink>
      </div>
      <div class="w-8">
        <img src="../assets/images/mail.png" alt="logo facebook" />
      </div>
    </div>
    <p class="text-primary font-nunito mt-2">02 97 75 31 73</p>
  </footer>
</template>

<script setup>
const { data: fetchMain, pending } = await useLazyFetch(import.meta.env.VITE_API_URL + `/api/articles?filters[main][$eq]=true&populate=image`, {
  transform: (_fetchMain) => _fetchMain.data[0],
  server: false,
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
