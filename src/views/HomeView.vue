<script setup lang="ts">
import ImagedShowcase from '@/components/ImagedShowcase.vue';

const years_since_i_started = new Date().getFullYear() - 2021
const gigCharacters = [
  {
    title: 'ślubach',
    content: '',
    img: undefined,
  },
  {
    title: 'pogrzebach',
    content: '',
    img: undefined,
  },
  {
    title: 'mszach okolicznościowych',
    content: '',
    img: undefined,
  },
]
</script>

<template>
  <p>Mam na imię <strong>Wojciech</strong> i od {{ years_since_i_started }} lat pracuję jako organista.</p>

  <p>Gram na:</p>
  <div class="flex-right justify-center wrap">
    <ImagedShowcase v-for="char in gigCharacters" :key="char.title"
      :title="char.title"
      :img="char.img"
    >
      <p>{{ char.content }}</p>
    </ImagedShowcase>
  </div>
</template>
