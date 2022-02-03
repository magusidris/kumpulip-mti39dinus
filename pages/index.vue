<template>
  <div>
    <hero />
    <section class="main-content columns" style="margin-top: -9rem">
      <div class="container">
        <section class="section is-main-section">
          <div v-if="validation.message" class="mb-3">
            <b-message type="is-danger">
              {{ validation.message }}
            </b-message>
          </div>
          <form @submit.prevent="postKTM">
            <div class="columns is-centered is-vcentered is-mobile">
              <div class="column is-2-fullhd is-2-widescreen is-3-desktop is-3-tablet is-6-mobile">
                  <div class="image-container">
                    <template v-if="thumb">
                      <figure class="image is-600x600">
                        <img class="border-rd" :src="thumb._url" alt="image's show">
                      </figure>
                    </template>
                    <template v-else>
                      <figure class="image is-600x600">
                        <img class="border-rd" src="/thumb.png">
                      </figure>
                    </template>
                  </div>
              </div>
            </div>
            <b-field>
              <b-upload v-model="user.image" drag-drop expanded>
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon icon="upload" size="is-large"></b-icon>
                    </p>
                    <p>Drop your files here or click to upload</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
            <div class="tags">
                <span v-if="user.image"
                    class="tag is-primary" >
                    {{user.image.name}}
                </span>
            </div>
            <div v-if="validation.image" class="mt-2 mb-3">
              <b-message type="is-danger">
                {{ validation.image[0] }}
              </b-message>
            </div>
            <b-field label="NIM (Nomor Induk Mahasiswa)">
              <b-input v-model="user.npm" @input="input" placeholder="Masukkan NIM"></b-input>
            </b-field>
            <div v-if="validation.npm" class="mt-2 mb-3">
              <b-message type="is-danger">
                {{ validation.npm[0] }}
              </b-message>
            </div>
            <b-field label="Nama Mahasiswa">
              <b-input v-if="mhs" v-model="user.name" placeholder="Nama Lengkap" disabled></b-input>
              <b-input v-if="!mhs" placeholder="Nama Lengkap" disabled></b-input>
            </b-field>
            <div v-if="validation.name" class="mt-2 mb-3">
              <b-message type="is-danger">
                {{ validation.name[0] }}
              </b-message>
            </div>
            <div class="buttons mt-4">
              <b-button
                icon-pack="fas"
                :disabled="!mhs || user.image === null"
                native-type="submit"
                type="is-primary"
                icon-left="paper-plane">
                Save
              </b-button>
              <b-button
                icon-pack="fas"
                native-type="reset"
                type="is-danger"
                icon-left="redo">
                Reset
              </b-button>
            </div>
          </form>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
  import Hero from '@/components/Shared/Hero'
  import { mapState } from 'vuex'
  export default {
    components: {
      Hero
    },
    data() {
      return {
        user: {
          image: null,
          npm: '',
          name: ''
        },
        selected: {},
        validation: [],
        thumb: null
      }
    },
    computed: {
      // this.user.name = this.$store.state.web.mahasiswa.mahasiswa.name
      ...mapState({
        mhs : state => state.web.mahasiswa.mahasiswa.data
      })
      // username = this.$store.state.web.mahasiswa.mahasiswa.name
    },
    methods: {
      async input(value) {
        var q = value

        await this.$store.dispatch('web/mahasiswa/getDetailMahasiswa', q)

        if (this.mhs) {
          this.user.npm = this.mhs.npm
          this.user.name = this.mhs.name
        }

      },
      async postKTM() {

        let image = this.user.image
        let npm = this.user.npm
        let name = this.mhs.name

        let formData = new FormData()
        formData.append('image', image)
        formData.append('npm', npm)
        formData.append('name', name)

        await this.$store.dispatch('web/kumpulip/storeIP', formData)

          // success
          .then(() => {

            // notification success
            this.$buefy.snackbar.open(`Terimakasih ${this.user.name}`)
            this.user = {}
          })

          .catch(error => {

            // assign error to state "validation"
            this.validation = error.response.data
          })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .border-rd {
    border-radius: 10px;
  }
</style>
