<template>
  <v-container>
    <v-data-table :headers="headers" :items="cart" class="elevation-1" hide-actions>
      <template v-slot:items="props">
        <td>{{ props.item.title }}</td>
        <td class="text-xs-right">
          <v-text-field type="number" v-model="props.item.count"></v-text-field>
        </td>
        <td class="text-xs-right">{{ props.item.price }}</td>
        <!-- <td class="text-xs-right">
                                 <v-icon color="red darken-1"  @click="removeItem(props.item)">delete</v-icon>
        </td>-->
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
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
        }
        // {
        //      text: 'Actions',
        //      value: 'id'
        // },
      ]
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
      switch (this.cart.length) {
        case 2:
          return this.findDiscount(0.1);
          break;
        case 3:
          return this.findDiscount(0.2);
          break;
        case 4:
          return this.findDiscount(0.3);
          break;
        case 5:
          return this.findDiscount(0.4);
          break;
        case 6:
          return this.findDiscount(0.5);
          break;
        case 7:
          return this.findDiscount(0.6);
          break;
        default:
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
    }
  }
};
</script>