<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import PipedSlot from './components/PipedSlot.vue'

const contactInfo = [
  {
    label: "+48 530 268 000",
    link: "tel:+48530268000",
  },
  {
    label: "kontakt@muzykaszytanamiare.pl",
    link: "mailto:kontakt@muzykaszytanamiare.pl",
  },
  {
    label: "muzykaszytanamiarepl",
    link: "https://www.facebook.com/muzykaszytanamiarepl",
  },
]
</script>

<template>
  <PipedSlot mobile-hide>
    <header>
      <div class="flex-right but-mobile-down justify-center align-center">
        <img alt="Logo" src="./assets/sz3_olive.svg" width="125" height="125" />
    
        <div>
          <h1>Muzyka Szyta Na Miarę</h1>
          <h2 class="dot-right">
            <span>Wojciech Przybyła</span>
            <span>Organista</span>
          </h2>
        </div>
      </div>
  
      <nav class="flex-right justify-center align-center">
        <RouterLink v-for="route in $router.options.routes" :key="route.path"
          :to="route.path"
        >
          {{ route.meta!.title }}
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
    <footer class="dot-right">
      <span>Projekt i wykonanie: <a href="https://wpww.pl/">Wojciech Przybyła</a></span>

      <span v-for="info in contactInfo" :key="info.label">
        <a :href="info.link">{{ info.label }}</a>
      </span>
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
  overflow-y: auto;
}
</style>
