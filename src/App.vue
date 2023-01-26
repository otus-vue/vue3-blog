<template>
  <Navigation></Navigation>
  <router-view name="sidebar"></router-view>
  <router-view></router-view>
</template>

<script setup>
import Navigation from "./views/general/Navigation.vue";
</script>
