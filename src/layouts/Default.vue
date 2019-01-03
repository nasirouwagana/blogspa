<template>
  <v-app>
    <v-toolbar
      dark
      app
      class="primary"
    >
      <v-toolbar-side-icon/>
      <v-toolbar-title class="headline text-uppercase">
        {{ appName }}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          to="/"
          exact
        >
          Home
        </v-btn>
        <v-btn
          flat
          to="/admin/posts"
          exact
        >
          Posts Management
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-footer
      app
      fixed
    >
      <v-layout
        justify-center
        row
        wrap
      >
      <v-flex
        text-xs-center
      >
        <div>&copy; {{ appName }} {{ appDate }}</div>
      </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },

  computed: {
    appName () {
      return process.env.VUE_APP_NAME
    },

    appDate () {
      return new Date().getFullYear()
    }
  }
}
</script>
