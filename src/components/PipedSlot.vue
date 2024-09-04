<script setup lang="ts">
const props = withDefaults(defineProps<{
  small?: boolean,
}>(), {
  small: false,
})
import Pipes from './Pipes.vue'
</script>

<template>
  <div class="flex-right justify-center align-center">
    <Pipes direction="left" :small="props.small" />
    <slot />
    <Pipes direction="right" :small="props.small" />
  </div>
</template>

<style scoped>
div {
  gap: 2em;
}
</style>