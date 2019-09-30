<template>
  <v-app>
    <ShoppingCart :dialog="dialog" @updateDialog="updateDialog"></ShoppingCart>
    <v-toolbar flat>
      <span>ร้านบ้านนายดินทร์</span>
      <v-spacer></v-spacer>
      <v-btn flat @click.stop="dialog = true">Check Out ( {{this.cart.length}} )</v-btn>
    </v-toolbar>
    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable */
import Main from './components/Main'
import ShoppingCart from './components/ShoppingCart'

export default {
  components: {
    Main,
    ShoppingCart
  },
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    }
  },
  methods: {
    updateDialog(val) {
      return this.dialog = val;
    }
  }
}
</script>
