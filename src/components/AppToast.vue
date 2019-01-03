<template>
  <v-snackbar
    :color="color"
    :timeout="timeout"
    :bottom="bottom"
    :top="top"
    :right="right"
    :left="left"
    :multi-line="mode"
    v-model="snackbar"
  >
    <slot/>
    <v-btn
      dark
      flat
      @click.native="snackbar = false"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'AppToast',

  props: {
    color: {
      type: String,
      required: true
    },

    timeout: {
      type: Number,
      default: 6000
    },

    mode: {
      type: String,
      default: 'multi-line'
    },

    top: {
      type: Boolean,
      required: false,
      default: false
    },

    bottom: {
      type: Boolean,
      required: false,
      default: false
    },

    left: {
      type: Boolean,
      required: false,
      default: false
    },

    right: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data () {
    return {
      snackbar: true
    }
  }
}
</script>
