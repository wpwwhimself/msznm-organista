<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="flex-right justify-center align-center">
      <img alt="Logo" src="./assets/logo.svg" width="125" height="125" />
  
      <div>
        <h1>Muzyka Szyta Na Miarę</h1>
        <h2>Wojciech Przybyła</h2>
        <h3>Organista</h3>
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


  <main>
    <h2>
      {{ $router.currentRoute.value.meta.title }}
    </h2>

    <RouterView />
  </main>

  <footer>
    <strong>Wojciech Przybyła</strong>
    <a href="tel:+48530268000">+48 530 268 000</a>
    <a href="mailto:kontakt@muzykaszytanamiare.pl">kontakt@muzykaszytanamiare.pl</a>
    <a href="https://www.facebook.com/muzykaszytanamiarepl">muzykaszytanamiarepl</a>
  </footer>
</template>

<style scoped>
header *, footer * {
  margin: 0;
}
footer > * {
  display: block;
  text-align: center;
}
main {
  text-align: center;
  min-height: 50vh;
  border-block: 1px solid lightgray;
}
</style>
