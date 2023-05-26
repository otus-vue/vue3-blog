<template>
  <Navigation @set-page="setPage"></Navigation>
  <router-view></router-view>

  <footer></footer>
</template>

<script setup>
import Navigation from "./views/general/Navigation.vue";
</script>
