<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <ListItem></ListItem>
      </v-flex>
      <v-flex xs12 v-if="this.cart.length !== 0">
        <ShoppingCart></ShoppingCart>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import ListItem from "./ListItem.vue";
import ShoppingCart from "./ShoppingCart.vue";

export default {
  components: {
    ListItem,
    ShoppingCart
  },
  created() {
    this.$store.dispatch("fetchData");
    console.log(this.$store)
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>

<style>
</style>
