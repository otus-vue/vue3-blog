<script setup>
defineProps(['commentId'])
</script>

<template>
  <h3>Comment #{{ commentId }}</h3>
</template>

<style scoped>
h3 {
  display: block;
  background: #eee;
  color: #222;
}
</style>