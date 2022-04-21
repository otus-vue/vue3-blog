<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home', meta: {isAdmin: false} }" class="nav-link">Home</router-link>
<!--            <a class="nav-link" href="#" @click="$emit('setPage', 'home')">Home</a>-->
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
<!--            <a class="nav-link" href="#" @click="$emit('setPage', 'about')">About</a>-->
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'post', params: { postId: 12, commentId: 'com_123' } }" class="nav-link">
              Sample Post 12
            </router-link>
<!--            <a class="nav-link" href="#">Sample Post</a>-->
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'post', params: { postId: 14, commentId: 'sdfgasdf' } }" class="nav-link">
              Sample Post 14
            </router-link>
<!--            <a class="nav-link" href="#">Sample Post</a>-->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav.navbar {
  position: fixed !important;
  top: 0 !important;
  background: #222 !important;
}
</style>

<script>
export default {};
</script>
