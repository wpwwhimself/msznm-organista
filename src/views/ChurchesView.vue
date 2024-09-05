<script setup lang="ts">
import ImagedShowcase from '../components/ImagedShowcase.vue'

const churches = [
  {
    title: 'Ciosaniec',
    img: 'https://diecezjazg.pl/wp-content/uploads/2016/10/IMG_6798-scaled.jpg',
    link: 'https://diecezjazg.pl/cm-business/ciosaniec-pw-sw-michala-archaniola/',
    description: "Główny kościół parafialny, gdzie czasami gram w gościach.",
  },
  {
    title: 'Kębłowo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/56810_Keblowo_kosciol_par_1.JPG',
    link: 'https://parafiakeblowo.pl/oparafii_4.html',
    description: "Parafia, od której wszystko się zaczęło.",
  },
  {
    title: "...i wiele innych",
    description: "Ciągle jestem zapraszany na zastępcze grania w różnych parafiach."
  }
]
</script>

<template>
  <p>Możesz mnie znaleźć w poniższych parafiach:</p>

  <div class="flex-right justify-center wrap">
    <ImagedShowcase v-for="church in churches" :key="church.title"
      :title="church.title"
      :img="church.img"
    >
      <p>{{ church.description }}</p>
      <a href="{{ church.link }}" target="_blank">Link</a>
    </ImagedShowcase>
  </div>
</template>

<style>

</style>
