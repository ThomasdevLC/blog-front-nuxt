<template>
  <header class="px-12 md:px-14 py-8 font-nunito font-bold">
    <div class="flex justify-between items-center">
      <p class="text-3xl lg:text-3xl">Amitiés Taléa</p>

      <button v-if="!showMenu" @click="toggleMenu" class="block md:hidden text-2xl">&#9776;</button>
      <div v-if="showMenu" @click="toggleMenu" class="block md:hidden text-2xl">&#10005;</div>

      <div v-if="!showMenu" class="hidden md:flex md:gap-7 lg:gap-12 text-xl">
        <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/infos">Infos</NuxtLink>
        <NuxtLink to="/events">Événements</NuxtLink>
        <NuxtLink to="/news">Actualités</NuxtLink>
      </div>

      <div v-if="showMenu" class="md:hidden flex flex-col bg-white bg-opacity-90 absolute text-2xl px-10 py-5 space-y-3 border border-gray-800 top-20">
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
  border-bottom: 1px solid black;
}
</style>
