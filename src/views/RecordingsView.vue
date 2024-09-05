<script setup lang="ts">
import ImagedShowcase from '../components/ImagedShowcase.vue';

const showcases = [
  {
    title: "Shorty",
    content: "Krótkie nagrania, jakie udaje mi się uchwycić podczas gry.",
    link: "https://www.youtube.com/playlist?list=PLpS8kGlqkYvS3nI6F_S2ZMchY3oS8VgjU",
    img: undefined,
  },
  {
    title: "Gig Vlogi",
    content: "Dłuższe relacje z grań z moimi komentarzami.",
    link: "https://www.youtube.com/playlist?list=PLpS8kGlqkYvQAj957C4JmjMwXmFSa9Z4_",
    img: undefined,
  },
]
</script>

<template>
  <p>Tu mam udokumentowane, jak gram:</p>

  <div class="flex-right justify-center wrap">
    <ImagedShowcase v-for="showcase in showcases" :key="showcase.title"
      :title="showcase.title"
      :img="showcase.img"
    >
      <p>{{ showcase.content }}</p>
      <a target="_blank" :href="showcase.link">Link</a>
    </ImagedShowcase>
  </div>
</template>

<style>

</style>
