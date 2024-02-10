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
const mainArticle = ref(null);
const eventsArticles = ref([]);
const remainingArticles = ref([]);

async function fetchMain() {
  try {
    const response = await $fetch(import.meta.env.VITE_API_URL + "/api/articles?filters[main][$eq]=true&populate=image");
    mainArticle.value = response.data[0];
  } catch (error) {
    console.error("Une erreur est survenue : ", error);
  }
}

fetchMain();

async function fetchEvents() {
  try {
    const response = await $fetch(import.meta.env.VITE_API_URL + "/api/articles?filters[tag][$eq]=Evénements&sort[0]=date:desc&populate=image");
    eventsArticles.value = response.data;
  } catch (error) {
    console.error("Une erreur est survenue : ", error);
  }
}

fetchEvents();

async function fetchRemaining() {
  try {
    const response = await $fetch(
      import.meta.env.VITE_API_URL + "/api/articles?filters[main][$eq]=false&filters[tag][$ne]=Evénements&sort[0]=date:desc&populate=image"
    );
    remainingArticles.value = response.data;
  } catch (error) {
    console.error("Une erreur est survenue : ", error);
  }
}

fetchRemaining();
</script>
