<template>
  <v-snackbar top multi-line v-model="snackBar" color="success" :timeout="2000">
    <p class="white--text">
      <b>{{ this.title }}</b> has been added to your cart.
    </p>
  </v-snackbar>
</template>

<script>
/* eslint-disable */
export default {
  props: ["title", "snackBar"]
};
</script>