<script setup lang="ts">
import ImagedShowcase from '../components/ImagedShowcase.vue'
</script>

<template>
  <p>Możesz mnie znaleźć w poniższych parafiach:</p>

  <div class="flex-right justify-center wrap">
    <ImagedShowcase title="Ciosaniec">
      <p>Główny kościół parafialny, gdzie czasami gram w gościach.</p>
    </ImagedShowcase>
    
    <ImagedShowcase title="Kębłowo">
      <p>Parafia, od której wszystko się zaczęło.</p>
    </ImagedShowcase>

    <ImagedShowcase title="Chobienice">
      <p>...</p>
    </ImagedShowcase>

    <ImagedShowcase title="Obra">
      <p>...</p>
    </ImagedShowcase>

    <ImagedShowcase title="Wolsztyn">
      <p>...</p>
    </ImagedShowcase>

    <ImagedShowcase title="">
      <p>i wiele innych</p>
    </ImagedShowcase>
  </div>
</template>

<style>

</style>
