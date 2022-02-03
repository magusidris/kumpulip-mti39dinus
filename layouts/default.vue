<template>
  <div>
    <Navbar />
    <Nuxt />
    <nav-footer />
  </div>
</template>

<script>
import Navbar from '@/components/Shared/Navbar'
import NavFooter from '@/components/Shared/Footer'
export default {
  components: {
    Navbar,
    NavFooter
  },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
