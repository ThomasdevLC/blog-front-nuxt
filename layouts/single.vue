<template>
  <header>
    <div class="flex gap-10 text-lg">
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
