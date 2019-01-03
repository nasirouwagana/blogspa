<template>
  <component :is="component">
    <slot />
  </component>
</template>

<script>
import Default from './layouts/Default'
// import Login from './layouts/Login'

export default {
  name: 'App',

  components: {
    Default
    // Login
  },

  computed: {
    component () {
      // if (this.$route.path === '/login') {
      //   return Login
      // }

      return Default
    }
  }
}
</script>
