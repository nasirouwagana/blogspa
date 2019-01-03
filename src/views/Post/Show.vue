<template>
  <v-container>
    <v-layout>
      <v-flex
        xs12
      >
        <v-card>
          <v-toolbar flat>
            <v-btn
              icon
              flat
              to="/admin/posts"
              exact
            >
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>
              {{ post.title }}
            </v-toolbar-title>
          </v-toolbar>

          <v-divider/>

          <v-card-text>
            {{ post.body }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['id'],

  data () {
    return {
      //
    }
  },

  created () {
    document.title = `Post Content - ${process.env.VUE_APP_NAME}`
  },

  computed: {
    ...mapGetters([
      'post'
    ])
  },

  mounted () {
    this.$store.dispatch('getPost', this.id)
  }
}
</script>
