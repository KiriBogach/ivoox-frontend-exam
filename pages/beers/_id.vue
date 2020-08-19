<template>
  <div v-if="beers">
    {{ selectedBeer($route.params.id) }}
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions('beers', ['fetchBeers']),
  },
  computed: {
    ...mapState('beers', ['beers']),
    ...mapGetters('beers', ['selectedBeer']),

  },
  created() {
    // TODO: lodash
    if (! this.beers || this.beers.length === 0) {
      this.fetchBeers();
    }
  }
}
</script>

<style scoped>

</style>