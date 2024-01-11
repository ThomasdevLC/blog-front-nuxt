<template>
  <header class="px-24 py-4 bg-black text-white">
    <div class="flex justify-between items-center">
      <p class="text-3xl">Amitiés Taléa</p>
      <div class="flex gap-10 text-lg">
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

<style scoped>
.router-link-exact-active {
  border-bottom: 1px solid white;
}
</style>
