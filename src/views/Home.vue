<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout
      row
      wrap
      align-center
      justify-center
      fill-height
    >
      <v-flex
        v-for="post in posts"
        :key="post.id"
        xs12
        sm4
        md3
      >
        <v-card>
          <v-img
            class="white--text"
            height="200px"
            :aspect-ratio="16/9"
            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 10) + 1}`"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline">{{ post.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-text>
            {{ post.body.substr(0, 100) }}...
          </v-card-text>

          <v-card-actions>
            <v-spacer/>
            <v-btn :to="`posts/${post.id}`">
              Read more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      //
    }
  },

  created () {
    document.title = `Home - ${process.env.VUE_APP_NAME}`
  },

  computed: {
    ...mapGetters([
      'posts'
    ])
  },

  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>
