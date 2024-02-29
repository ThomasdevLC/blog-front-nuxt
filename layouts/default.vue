<template>
  <header class="px-12 md:px-14 py-6 bg-white bg-opacity-90 sticky top-0 z-50">
    <div class="flex justify-between items-center">
      <div class="flex">
        <p class="blog text-xs font-extrabold font-nunito text-primary flex items-center justify-center">BLOG</p>
        <p class="text-3xl lg:text-5xl font-PPRader w-[200px] lg:w-[280px] text-primary">Amitiés Taléa</p>
      </div>

      <button v-if="!showMenu" @click="toggleMenu" class="block md:hidden text-2xl text-primary">&#9776;</button>
      <div v-if="showMenu" @click="toggleMenu" class="block md:hidden text-2xl text-primary">&#10005;</div>

      <div v-if="!showMenu" class="hidden md:flex md:gap-4 lg:gap-4 lg:text-2xl font-nunito font-semibold text-gray-900 backdrop-blur-lg">
        <NuxtLink to="/">Accueil</NuxtLink>
        <span>|</span>
        <NuxtLink to="/infos">Infos</NuxtLink>
        <span>|</span>
        <NuxtLink to="/events">Événements</NuxtLink>
        <span>|</span>
        <NuxtLink to="/news">Actualités</NuxtLink>
      </div>

      <div
        v-if="showMenu"
        class="md:hidden flex flex-col bg-white bg-opacity-90 absolute text-2xl px-10 py-5 space-y-3 border border-gray-800 top-20 backdrop-blur-lg"
      >
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/infos">Infos</NuxtLink>
        <NuxtLink to="/events">Événements</NuxtLink>
        <NuxtLink to="/news">Actualités</NuxtLink>
      </div>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px solid #004863;
  color: hsl(196, 100%, 12%);
}
.blog {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
wheather
