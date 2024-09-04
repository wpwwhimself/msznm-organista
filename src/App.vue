<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PipedSlot from './components/PipedSlot.vue'
</script>

<template>
  <PipedSlot>
    <header>
      <div class="flex-right justify-center align-center">
        <img alt="Logo" src="./assets/sz3_olive.svg" width="125" height="125" />
    
        <div>
          <h1>Wojciech Przybyła</h1>
          <h2>Organista</h2>
        </div>
      </div>
  
      <nav class="flex-right justify-center align-center">
        <RouterLink v-for="route in $router.options.routes" :key="route.path"
          :to="route.path"
        >
          {{ route.meta.title }}
        </RouterLink>
      </nav>
    </header>
  </PipedSlot>

  <main>
    <h2>
      {{ $router.currentRoute.value.meta.title }}
    </h2>

    <RouterView />
  </main>

  <PipedSlot small>
    <footer class="flex-right justify-center">
      <span>Projekt i wykonanie: <a href="https://wpww.pl/">Wojciech Przybyła</a></span>
      •<a href="tel:+48530268000">+48 530 268 000</a>
      •<a href="mailto:kontakt@muzykaszytanamiare.pl">kontakt@muzykaszytanamiare.pl</a>
      •<a href="https://www.facebook.com/muzykaszytanamiarepl">muzykaszytanamiarepl</a>
    </footer>
  </PipedSlot>
</template>

<style scoped>
header *, footer * {
  margin: 0;
}

main {
  text-align: center;
  min-height: 50vh;
  border-block: 1px solid lightgray;
}
</style>
