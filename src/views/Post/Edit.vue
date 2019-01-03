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
            <v-btn
              icon
              flat
              to="/admin/posts"
              exact
            >
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>
              Edit Post {{ id }}
            </v-toolbar-title>
          </v-toolbar>

          <v-divider/>

          <v-card-text>
            <v-form
              v-model="valid"
              ref="form"
            >
              <v-container fluid>
                <v-layout row>
                  <v-flex
                    xs12
                    sm12
                    md6
                    offset-md3
                  >
                    <v-text-field
                      label="Title *"
                      v-model="title"
                      required
                      box
                      :error-messages="errors.collect('title')"
                      v-validate="'required'"
                      data-vv-name="title"
                      data-vv-as="title"
                    />
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex
                    xs12
                    sm12
                    md6
                    offset-md3
                  >
                    <v-textarea
                      label="Body *"
                      v-model="body"
                      required
                      box
                      :error-messages="errors.collect('body')"
                      v-validate="'required'"
                      data-vv-name="body"
                      data-vv-as="body"
                    />
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex
                    xs12
                    sm12
                    md6
                    offset-md3
                  >
                    <v-btn
                      color="primary"
                      @click.native="submitForm()"
                      :disabled="loading || errors.any() || !formIsValid"
                      :loading="loading"
                    >
                      Save
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import AppToast from '../../components/AppToast'

export default {
  props: ['id'],

  components: {
    AppToast
  },

  data () {
    return {
      valid: false,
      title: '',
      body: '',
      loading: false,
      hasMessage: '',
      messageType: '',
      message: ''
    }
  },

  created () {
    document.title = `Edit Post ${this.id} - ${process.env.VUE_APP_NAME}`
  },

  computed: {
    ...mapGetters([
      'post'
    ]),

    formIsValid () {
      return this.title !== '' &&
        this.body !== ''
    },

    postForm () {
      return {
        id: this.id,
        title: this.title,
        body: this.body
      }
    }
  },

  mounted () {
    this.$store.dispatch('getPost', this.id)
      .then(data => {
        this.title = data.title
        this.body = data.body
      })
  },

  methods: {
    clearMessage () {
      this.hasMessage = false
      this.messageType = ''
      this.message = ''
    },

    submitForm () {
      this.loading = true

      this.$store.dispatch('updatePost', this.postForm)
        .then(() => {
          this.hasMessage = true
          this.messageType = 'success'
          this.message = 'Post updated successfully.'

          this.loading = false
          setTimeout(() => this.clearMessage(), 10000)
        })
        .catch(() => {
          this.hasMessage = true
          this.messageType = 'error'
          this.message = 'An error occured'

          this.loading = false
          setTimeout(() => this.clearMessage(), 10000)
        })
    }
  }
}
</script>
