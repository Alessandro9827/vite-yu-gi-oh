<template>
  <header>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
            <img src="../assets/img/Yugioh_anime_logo.webp" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            {{ title }}
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

</style>