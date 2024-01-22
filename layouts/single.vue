<template>
  <header class="px-24 py-10">
    <div class="flex gap-10 text-lg back-home">
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
