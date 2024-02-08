<template>
  <header class="px-12 md:px-14 py-3 mb-4">
    <div title="ACCUEIL">
      <NuxtLink to="/">
        <div class="flex">
          <p class="blog text font-extrabold font-nunito text-primary flex items-center justify-center">BLOG</p>
          <p class="text-3xl lg:text-5xl font-PPRader text-primary">Amitiés Taléa</p>
        </div>
      </NuxtLink>
    </div>
  </header>
  <div>
    <slot />
  </div>
</template>

<style scoped>
.blog {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
}
</style>
