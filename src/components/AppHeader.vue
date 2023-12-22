<template>
  <header>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="../assets/img/Yugioh_anime_logo.webp" alt="Logo" class="d-inline-block align-text-top me-3">
            <h1 class="d-inline-block">
                {{ title }}
            </h1>
            </a>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
    data() {
        return {
            title: 'Yu-gi-oh Api'
        }
    }
}
</script>

<style lang="scss">
header > nav img {
    height: 30px;
}


</style>