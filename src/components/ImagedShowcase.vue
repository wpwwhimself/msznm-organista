<script setup lang="ts">
import ImageContainer from './ImageContainer.vue';

const props = defineProps<{
  title: string,
  img?: string,
}>()
</script>

<template>
  <div class="container">
    <div class="contents">
      <ImageContainer :src="props.img" />
      <h3>{{ props.title }}</h3>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
  box-sizing: border-box;
  border-block: 1px solid transparent;
  
  &:hover {
    border-color: var(--fg);
  }
}

.contents {
  text-align: left;
  margin-block: 1em;
}
</style>