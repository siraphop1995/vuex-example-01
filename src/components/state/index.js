import Vuex from "vuex";
import Vue from "vue";
import Axios from "axios";
import _ from "underscore";

Vue.use(Vuex);

// export const oldStore = new Vuex.Store({
//   state: {
//     books: [],
//     cart: []
//   },
//   mutations: {
//     setBooks(state, payload) {
//       state.books = payload;
//     },
//     setCart(state, payload) {
//       state.cart = payload;
//     },
//     addCart(state, payload) {
//       payload.count = 1;
//       state.cart.push(payload);
//     },
//     removeItemById(state, payload) {
//       state.cart = _.reject(state.cart, book => {
//         return JSON.parse(JSON.stringify(book.id)) === payload.id;
//       });
//     },
//     mergeCountItem(state) {
//       state.cart = _(state.cart).groupBy("id");
//     }
//   },
//   actions: {
//     fetchData({ commit }) {
//       return Axios.get(`https://api.jsonbin.io/b/5c90b4da2d33133c4017028d`)
//         .then(res => {
//           commit("setBooks", res.data.books);
//         })
//         .catch(err => {
//           alert(err);
//         });
//     },
//     addCart({ commit }, payload) {
//       commit("addCart", payload);
//     },
//     removeItemById({ commit }, payload) {
//       commit("removeItemById", payload);
//     },
//     mergeCountItem({ commit }) {
//       commit("mergeCountItem");
//     }
//   },
//   getters: {
//     books(state) {
//       return state.books;
//     },
//     cart(state) {
//       return state.cart;
//     }
//   }
// });

const Book = {
  state: { books: [] },

  mutations: {
    setBooks(state, payload) {
      state.books = payload;
    },
    removeItemById(state, payload) {
      state.cart = _.reject(state.cart, book => {
        return JSON.parse(JSON.stringify(book.id)) === payload.id;
      });
    }
  },
  actions: {
    fetchData({ commit }) {
      return Axios.get(`https://api.jsonbin.io/b/5c90b4da2d33133c4017028d`)
        .then(res => {
          commit("setBooks", res.data.books);
        })
        .catch(err => {
          alert(err);
        });
    },
    removeItemById({ commit }, payload) {
      commit("removeItemById", payload);
    }
  },

  getters: {
    books(state) {
      return state.books;
    }
  }
};
const Cart = {
  state: { cart: [] },
  mutations: {
    setCart(state, payload) {
      state.cart = payload;
    },
    addCart(state, payload) {
      payload.count = 1;
      state.cart.push(payload);
    },
    mergeCountItem(state) {
      state.cart = _(state.cart).groupBy("id");
    }
  },
  actions: {
    addCart({ commit }, payload) {
      commit("addCart", payload);
    },
    removeItemById({ commit }, payload) {
      commit("removeItemById", payload);
    }
  },
  getters: {
    cart(state) {
      return state.cart;
    }
  }
};

export const store = new Vuex.Store({
  modules: {
    book: Book,
    cart: Cart
  }
});
