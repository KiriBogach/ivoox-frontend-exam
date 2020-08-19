export const state = () => ({
    beers: [],
})

export const actions = {
    async fetchBeers({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('https://api.punkapi.com/v2/beers')
                .then(({ data }) => {
                    commit('SET_BEERS', data);
                    resolve(data);
                })
                .catch(err => {
                    reject(err);
                })
        })
    },

}

export const getters = {
    selectedBeer: (state) => (id) => {
        console.log(state.beers.find(beer => beer.id == id));
        return state.beers.find(beer => beer.id == id)
    }
}

export const mutations = {
    SET_BEERS(state, payload) {
        state.beers = payload;
    }
}