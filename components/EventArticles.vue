<template>
  <NuxtLink :to="`/article/${eventArticle.id}`">
    <div class="relative text-white h-64 group">
      <img
        :src="imageUrl"
        :alt="eventArticle.image.alternativeText"
        class="h-full w-full object-cover group-hover:brightness-125 transition duration-300 ease-in-out"
      />
      <div class="absolute top-0 h-full bg-black bg-opacity-50 w-full flex flex-col justify-end">
        <div class="p-5">
          <p class="tag-second">{{ eventArticle.tag }}</p>
          <h2 class="font-cormorant font-bold text-2xl md:text-xl mt-2">{{ eventArticle.title }}</h2>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps(["eventArticle"]);
const imageUrl = computed(() => import.meta.env.VITE_API_URL + props.eventArticle.image.formats.medium.url);
</script>

<style lang="scss" scoped></style>
