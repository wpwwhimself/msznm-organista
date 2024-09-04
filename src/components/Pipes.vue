<script setup lang="ts">
const props = withDefaults(defineProps<{
  direction: "left" | "right",
  small?: boolean
}>(), {
  small: false,
})
</script>

<template>
  <svg :class="[
    props.direction == 'right' && 'flip',
    props.small && 'small',
  ].filter(Boolean).join(' ')"
    version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 525.4 1500" xml:space="preserve"
  >
    <g id="Warstwa_1">
      <path d="M0.1,185.5v929.2c7.5,84.9,24.4,152,50.7,201.2c26.3-49.2,43.2-116.3,50.7-201.2V185.5C68.4,168.5,34.7,168.1,0.1,185.5z
        M91.5,1007.5H10v-39.3h81.5V1007.5z"/>
      <path d="M177.7,95v1082.3c9.3,98.9,30.3,177.1,63,234.4c32.7-57.3,53.7-135.4,63-234.4V95C262.6,75.1,220.6,74.7,177.7,95z
        M291.3,1052.3H190v-45.8h101.3V1052.3z"/>
      <path d="M379.9,14.1v1219.1c10.7,111.4,35,199.4,72.7,264c37.8-64.6,62-152.5,72.7-264V14.1C478-8.2,429.5-8.8,379.9,14.1z
        M511.1,1092.4h-117v-51.6h117V1092.4z"/>
    </g>
  </svg>
</template>

<style scoped>
svg {
  width: 50px;
  fill: var(--fg) !important;
}
.flip {
  transform: scaleX(-1);
}
.small {
  height: 2em;
  width: auto;
}
</style>