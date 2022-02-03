// state
export const state = () => ({

  // mahasiswa
  mahasiswa: {}

})

// mutations
export const mutations = {
  setMahasiswaData(state, payload) {
    state.mahasiswa = payload
  }
}

// actions
export const actions = {

  // get Mahasiswa Data
  getDetailMahasiswa({ commit }, payload) {

    // set promise
    return new Promise((resolve, reject) => {

      // get to Rest API "/api/web/mahasiswa/:npm" with method "GET"
      this.$axios.get(`/v1/api/web/mahasiswa/?npm=${payload}`)

      // success
      .then(response => {

        // commit to mutations "setMahasiswaData"
        let $mhs = response.data
        commit('setMahasiswaData', $mhs)

        resolve()
      })
      .catch(error => reject(error))
    })
  }
}
