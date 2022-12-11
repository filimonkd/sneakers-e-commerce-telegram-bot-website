import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      addToCartCount: null,
      count: 0,
      showCart: false,
      cartValue: null,
      setCartValue: null,
      setSneakersPrice: null,
    };
  },
  mutations: {
    addToCount(state, payload) {
      state.count = state.count + payload;
    },
    subtractFromCount(state, payload) {
      if (state.count < 1) {
        state.count = 0;
      } else {
        state.count = state.count - payload;
      }
    },
    addCartHandler(state) {
      const price = state.count * 125;
      state.setCartValue = state.count;
      state.setSneakersPrice = price;
      if (state.count > 0) {
        state.addToCartCount = state.count;
      }
      //   console.log(state.setCartValue)
    },
    deleteCart(state) {
      state.setCartValue = null;
      state.addToCartCount = null;
    },
    // showCartHandler(state){
    //     state.showCart = !state.showCart;
    //     console.log(state.setCartValue)
    // }
  },
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get(
        "https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new"
      );
      context.commit("addToCount", data.data);
    },
  },
  getters: {
    activeIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index) => {
        if (number == payload) {
          indexes.push(index);
        }
      });
      return indexes;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount("#app");
