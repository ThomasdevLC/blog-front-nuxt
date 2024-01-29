<template>
  <header class="px-24 py-8 font-nunito font-bold">
    <div class="flex justify-between items-center">
      <p class="text-3xl">Amitiés Taléa</p>
      <div class="flex gap-14 text-xl">
        <!-- <NuxtLink to="/">Accueil</NuxtLink>
        <NuxtLink to="/infos">Infos</NuxtLink>
        <NuxtLink to="/events">Événements</NuxtLink>
        <NuxtLink to="/news">Actualités</NuxtLink> -->
      </div>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>

<style scoped>
.router-link-exact-active {
  border-bottom: 1px solid black;
}
</style>
