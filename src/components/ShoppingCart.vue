<template>
  <v-dialog v-model="dialog" full-width persistent>
    <v-card>
      <v-card-title primary-title>
        <h3>Shopping Cart</h3>
      </v-card-title>
      <v-card-text>
        <CartList></CartList>
      </v-card-text>
      <v-layout row wrap>
        <v-flex xs12 text-xs-right class="ma-4">
          <p>Total Price: {{ this.total.toLocaleString() }} ฿</p>
          <p>Discount Price: {{ this.discount.toLocaleString() }} ฿</p>
          <p>Discount Percentage: -{{this.percentage}} %</p>
          <hr />
          <p>Summary: {{ this.summary.toLocaleString() }} ฿</p>
        </v-flex>
      </v-layout>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" flat @click.native="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
/* eslint-disable */
import CartList from "./CartList.vue";
import { constants } from "fs";

export default {
  props: ["dialog"],
  components: {
    CartList
  },
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Quantity",
          value: "count"
        },
        {
          text: "Price",
          value: "price"
        },
        {
          text: "Actions",
          value: "id"
        }
      ],
      percentage: 0,
      sameBook: 0
    };
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    total() {
      var total = 0;
      for (var index in this.cart) {
        total = total + this.cart[index].price * this.cart[index].count;
      }
      return total;
    },
    discount() {
      if (this.cart.length >= 2) {
        this.sameBook = Math.min(...this.cart.map(book => book.count));
        console.log("sameBook: " + this.sameBook);
        switch (this.sameBook) {
          case 1:
            this.percentage = 10;
            return this.findDiscount(0.1);
            break;
          case 2:
            this.percentage = 20;
            return this.findDiscount(0.2);
            break;
          case 3:
            this.percentage = 30;
            return this.findDiscount(0.3);
            break;
          case 4:
            this.percentage = 40;
            return this.findDiscount(0.4);
            break;
          case 5:
            this.percentage = 50;
            return this.findDiscount(0.5);
            break;
          case 6:
            this.percentage = 60;
            return this.findDiscount(0.6);
            break;
          default:
            this.percentage = 0;
            return 0;
        }
      } else {
        this.sameBook = 0;
        this.percentage = 0;
        return 0;
      }
    },
    summary() {
      return this.total - this.discount;
    }
  },
  methods: {
    findDiscount(discount) {
      var price = 0;
      for (var index in this.cart) {
        price = price + parseInt(this.cart[index].price);
      }
      return price * discount;
    },
    removeItem(item) {
      return this.$store.dispatch("removeItemById", item);
    },
    close() {
      this.$emit("updateDialog", false);
    }
  }
};
</script>