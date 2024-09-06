<script setup lang="ts">
const props = withDefaults(defineProps<{
  small?: boolean,
  mobileHide?: boolean,
}>(), {
  small: false,
  mobileHide: false,
})
import Pipes from './Pipes.vue'
</script>

<template>
  <div class="flex-right justify-center align-center">
    <Pipes direction="left" :small="props.small"
      :class="[
        props.mobileHide && 'mobile-hide'
      ].filter(Boolean).join(' ')"
    />
    <slot />
    <Pipes direction="right" :small="props.small"
      :class="[
        props.mobileHide && 'mobile-hide'
      ].filter(Boolean).join(' ')"
    />
  </div>
</template>

<style scoped>
div {
  gap: 2em;
}
</style>