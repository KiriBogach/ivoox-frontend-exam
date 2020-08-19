<template>
  <div class="overflow-auto">
    <b-table
        id="my-table"
        :items="beers"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        small
    >

      <template v-slot:cell(id)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <a href="" @click.prevent="$router.push(`beers/${data.value}`)" >{{ data.value }}</a>
      </template>
    </b-table>

    <p class="mt-3">Pagina actual: {{ currentPage }}</p>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: 'beers',

  data() {
    return {
      perPage: 5,
      currentPage: 1,
      fields: [
        {
          // A column that needs custom formatting,
          // calling formatter 'fullName' in this app
          key: 'id',
          label: 'ID',
        },
      ],
    }
  },

  computed: {
    ...mapState('beers', ["beers"]),

    rows() {
      return this.beers.length
    }
  },

  methods: {
    ...mapActions('beers', ["fetchBeers"])
  },

  created() {
    this.fetchBeers();

    // TODO: Paginar usando https://api.punkapi.com/v2/beers?page=X
  }
}
</script>