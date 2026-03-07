<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import vite from '@images/vite.svg'
import vue from '@images/vue.svg'
import sf from '@images/sf.webp'

</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img :src="vite" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vue" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://symfony.com//" target="_blank">
      <img :src="sf" class="logo vue" alt="Symfony logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue 3 + Symfony 8" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
