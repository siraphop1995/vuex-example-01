<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg4 v-for="book in books" :key="book.id">
        <Item :item="book"></Item>
      </v-flex>
      <p>{{ this.cart }}</p>
    </v-layout>
  </v-container>
</template>

<script>
/* eslint-disable */
import Item from "./Item.vue";

export default {
  components: {
    Item
  },
  computed: {
    books() {
      return this.$store.getters.books;
    },
    cart() {
      return this.$store.getters.cart;
    }
  }
};
</script>