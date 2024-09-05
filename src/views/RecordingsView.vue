<script setup lang="ts">
import ImagedShowcase from '../components/ImagedShowcase.vue';

const showcases = [
  {
    title: "Shorty",
    content: "Krótkie nagrania, jakie udaje mi się uchwycić podczas gry.",
    link: "https://www.youtube.com/playlist?list=PLpS8kGlqkYvS3nI6F_S2ZMchY3oS8VgjU",
    img: "https://i.ytimg.com/vi/S2bqofSOgP4/oar2.jpg?sqp=-oaymwEqCJUDENAFSFqQAgHyq4qpAxkIARUAAIhC2AEB4gEMCBYQAhgGIAE4AUAB&rs=AOn4CLAKaizBWaT2G0M8U7Pe3thDmB47IA",
  },
  {
    title: "Gig Vlogi",
    content: "Dłuższe relacje z grań z moimi komentarzami.",
    link: "https://www.youtube.com/playlist?list=PLpS8kGlqkYvQAj957C4JmjMwXmFSa9Z4_",
    img: "https://i.ytimg.com/vi/EJcknn2ZDwo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCeREz1780cC-E25BxDMplS03o5IQ",
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
