<template>
  <footer class="footer custom-footer pb-10">
    <div class="content has-text-centered">
      <p>
        &copy;<strong>2020 MTI Reg 39</strong> by <a href="https://github.com/nuxtcraft">nuxtcraft</a>. dibuat dengan ♥ di Gresik
      </p>
      <div class="pt-3">
        <a target="_" :href="data.url" v-for="(data, index) in socmeds" :key="index">
          <span class="icon has-text-white mx-5">
            <i :class="data.icon"></i>
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        socmeds: [
          {
            icon: 'fab fa-github',
            url: 'https://github.com/nuxtcraft'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .custom-footer {
    background-color: #167DF0;
    color: #fff;
    >.content {
      > p {
        > strong {
          color: #fff;
        }
      }
    }
  }

  .fa-github {
    font-size: 45px;
  }

  a {
    color: #fff;
    font-weight: 700;
  }
  a:hover {
    color: #ccd0d4;
  }
</style>
