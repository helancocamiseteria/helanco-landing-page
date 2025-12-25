<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Scroll to top on page load/reload (only if no hash in URL)
onMounted(() => {
  // Don't interfere with hash navigation
  if (!window.location.hash) {
    window.scrollTo(0, 0)
  }
})
</script>

<style>
/* Prevent FOUC by hiding content until styles are loaded */
html {
  visibility: visible;
  opacity: 1;
}
</style>
