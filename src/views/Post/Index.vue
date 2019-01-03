<template>
  <v-container>
    <v-layout>
      <v-flex
        xs12
      >
        <app-toast
          v-if="hasMessage"
          :color="messageType"
          :bottom="true"
          :right="true"
        >
          {{ message }}
        </app-toast>

        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>
              Posts List
            </v-toolbar-title>

            <v-spacer/>

            <v-btn
              class="white"
              to="/admin/posts/create"
            >
              Create Post
            </v-btn>
          </v-toolbar>

          <v-divider/>

          <v-card-title>
            <v-spacer></v-spacer>
            <v-layout row align-center style="max-width: 450px">
              <v-text-field
                v-model="search"
                prepend-inner-icon="search"
                label="Search"
                single-line
                solo
                hide-details
              />
            </v-layout>
          </v-card-title>

          <v-data-table
            :headers="headers"
            :items="posts"
            :search="search"
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.title }}</td>
              <td>{{ props.item.body }}</td>
              <td class="justify-center layout px-0">
                <v-tooltip bottom>
                  <v-btn
                    icon
                    slot="activator"
                    class="mx-2"
                    :to="`/admin/posts/${props.item.id}`"
                  >
                    <v-icon>remove_red_eye</v-icon>
                  </v-btn>
                  <span>Display</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <v-btn
                    icon
                    slot="activator"
                    class="mx-2"
                    :to="`/admin/posts/${props.item.id}/edit`"
                  >
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <span>Edit</span>
                </v-tooltip>

                <v-tooltip bottom>
                  <v-btn
                    icon
                    slot="activator"
                    class="mx-2"
                    @click="deletePost"
                  >
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>Delete</span>
                </v-tooltip>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="300"
      >
        <v-card>
          <v-card-title class="headline">Deleting</v-card-title>
          <v-card-text>
            Do you really want to delete this post ?
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click.native="cancelDelete"
            >
              Cancel
            </v-btn>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click.native="confirmDelete"
              :disabled="loading"
              :loading="loading"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import AppToast from '../../components/AppToast'

export default {
  components: {
    AppToast
  },

  data () {
    return {
      search: '',
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Body', value: 'body' },
        {
          text: '',
          align: 'left',
          sortable: false,
          value: ''
        }
      ],
      dialog: false,
      loading: false,
      hasMessage: '',
      messageType: '',
      message: ''
    }
  },

  created () {
    document.title = `Posts List - ${process.env.VUE_APP_NAME}`
  },

  computed: {
    ...mapGetters([
      'posts'
    ])
  },

  mounted () {
    this.$store.dispatch('getPosts')
  },

  methods: {
    deletePost () {
      this.dialog = true
    },

    cancelDelete () {
      this.dialog = false
    },

    clearMessage () {
      this.hasMessage = false
      this.messageType = ''
      this.message = ''
    },

    confirmDelete () {
      this.$store.dispatch('deletePost', this.id)
        .then(() => {
          this.dialog = false

          this.hasMessage = true
          this.messageType = 'success'
          this.message = 'Post deleted successfully.'

          this.loading = false
          setTimeout(() => this.clearMessage(), 10000)
        })
    }
  }
}
</script>
