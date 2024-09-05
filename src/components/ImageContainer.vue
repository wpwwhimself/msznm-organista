<script setup lang="ts">
const props = defineProps<{
  src?: string
}>()
</script>

<template>
  <div class="img-wrapper">
    <img v-if="props.src" :src="props.src" />
  </div>
</template>

<style scoped>
.img-wrapper {
  overflow: hidden;
  height: 12em;
}

img {
  width: 100%;
  height: 12em;
  object-fit: cover;

  &:hover {
    scale: 1.2;
  }
}
</style>