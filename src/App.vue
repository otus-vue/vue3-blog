<template>
  <Navigation @setPage="setPage"></Navigation>
  <router-view></router-view>
  <router-view name="sidebar"></router-view>
</template>

<script setup>
import Navigation from "./views/general/Navigation.vue";
</script>

<style scoped>
>>> .router-link-active{
  color: greenyellow !important;
}
>>> .router-link-exact-active {
  color: red !important;
}
</style>
