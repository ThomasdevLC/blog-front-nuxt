<template>
  <header class="px-10 md:px-24 pt-10 mb-4">
    <div class="text-lg back-home">
      <NuxtLink to="/">Accueil</NuxtLink>
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
