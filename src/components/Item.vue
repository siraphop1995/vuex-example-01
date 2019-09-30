<template>
  <div>
    <SnackBar :title="this.item.title" :snackBar="purchase"></SnackBar>
    <v-card class="rounded-card align-content-center" hover height="100%">
      <v-layout align-center>
        <v-flex xs5 class="mx-2 mb-2">
          <v-img :src="this.item.cover" contain class="rounded-card"></v-img>
        </v-flex>
        <v-flex xs5 class="mx-2">
          <v-card-title primary-title>
            <div>
              <h4 class="mb-3">{{ this.item.title }}</h4>
              <div>
                <v-chip outline color="success">Price: {{ this.item.price }} ฿</v-chip>
              </div>
            </div>
          </v-card-title>
        </v-flex>
        <v-flex xs2>
          <v-checkbox v-model="purchase" color="success"></v-checkbox>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
/* eslint-disable */
import SnackBar from "./SnackBar.vue";
export default {
  components: {
    SnackBar
  },
  props: ["item"],
  data() {
    return {
      purchase: false,
      snackBar: false
    };
  },
  watch: {
    purchase(val) {
      var item = JSON.parse(JSON.stringify(this.item));
      if (val === true) {
        console.log(item);
        this.$store.dispatch("addCart", item);
      } else {
        this.$store.dispatch("removeItemById", item);
      }
    }
  },
  methods: {
    checkBox() {
      console.log("Click");
      return (this.purchase = !this.purchase);
    }
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 15px;
}
</style>
