<script setup lang="ts">
const props = defineProps<{
  title: string,
  img?: string,
}>()
</script>

<template>
  <div class="container flex-right align-center">
    <img v-if="props.img" :src="props.img" :alt="props.title" />

    <div class="contents">
      <h3>{{ props.title }}</h3>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 300px;
}
.contents {
  text-align: left;
}
</style>