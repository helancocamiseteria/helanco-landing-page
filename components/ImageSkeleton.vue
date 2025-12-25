<template>
  <div class="image-skeleton" :style="{ aspectRatio }">
    <div class="skeleton-shimmer"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  aspectRatio?: string
}>()
</script>

<style scoped>
.image-skeleton {
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.02) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border-radius: 10px;
  overflow: hidden;
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(212, 132, 62, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
