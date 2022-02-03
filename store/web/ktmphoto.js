//state
export const state = () => ({

})

// mutation
export const mutations = {

}

// actions
export const actions = {
  storeKTM({ dispatch }, payload) {

    // set Promise
    return new Promise((resolve, reject) => {

      // store to Rest API "/api/v1/admin/posts" with method "POST"
      this.$axios.post(`/v1/api/web/kumpuldm`, payload)

      // success
      .then(() => {

        resolve()

      })

      .catch(error => reject(error))
    })
  }
}
