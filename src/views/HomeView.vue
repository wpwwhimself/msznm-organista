<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

const years_since_i_started = new Date().getFullYear() - 2021
</script>

<template>
  <p>Mam na imię <strong>Wojciech</strong> i od {{ years_since_i_started }} lat pracuję jako organista.</p>
</template>
