<template>
  <nav class="navbar fixed-top navbar-dark bg-primary">
    <a class="navbar-brand" href="#" @click.prevent="$router.push('/')">
      🍺 <span class="navbar-brand mb-0 h1">BrewDog Beer Catalog</span>
    </a>
    <form class="form-inline">
      <a href="" @click.prevent="$router.push('beers')" class="btn btn-outline-light float-right mr-1">
        CERVEZAS
      </a>
      <a href="" @click.prevent="$router.push('profile')" class="btn btn-outline-light float-right">
        PERFIL
      </a>
    </form>
  </nav>
</template>

<script>
export default {
name: "NavBar"
}
</script>

<style scoped>

</style>