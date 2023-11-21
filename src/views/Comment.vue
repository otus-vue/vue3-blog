<script setup>
import {onBeforeRouteLeave} from "vue-router";

defineProps(['commentId'])

</script>

<template>
  <div>
    comment #{{ commentId }}
  </div>
</template>

<style>

</style>