import { createApp } from "vue";
import { createStore } from "vuex";
import "./style.css";
import App from "./App.vue";
import shoe1 from "../src/images/image-product-1-thumbnail.jpg";
import shoe2 from "../src/images/image-product-2-thumbnail.jpg";
import shoe3 from "../src/images/image-product-3-thumbnail.jpg";
import shoe4 from "../src/images/image-product-4-thumbnail.jpg";
import product1 from "../src/images/image-product-1.jpg";
import product2 from "../src/images/image-product-2.jpg";
import product3 from "../src/images/image-product-3.jpg";
import product4 from "../src/images/image-product-4.jpg";

const store = createStore({
  state() {
    return {
      addToCartCount: null,
      count: 0,
      showNav:false,
      showCart: false,
      checkoutState :false,
      cartValue: null,
      setCartValue: null,
      setSneakersPrice: null,
      activeImage: 1,
      productImage: product1,
      shoes: [
        {
          id: 1,
          shoe: shoe1,
          product: product1,
        },
        {
          id: 2,
          shoe: shoe2,
          product: product2,
        },
        {
          id: 3,
          shoe: shoe3,
          product: product3,
        },
        {
          id: 4,
          shoe: shoe4,
          product: product4,
        },
      ],
    };
  },
  mutations: {
    async handleImage(state, payload) {
      try {
        state.activeImage = payload;
        for (let index = 1; index < state.shoes.length; index++) {
          state.productImage = state.shoes[payload-1].product;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async handleMobImage(state) {
      try {
        if (state.activeImage <4) {
          state.activeImage = state.activeImage + 1;
          state.productImage = state.shoes[state.activeImage-1].product;
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    async handleMobImageback(state) {
      try {
        if (state.activeImage >1) {
          state.activeImage = state.activeImage - 1;
          state.productImage = state.shoes[state.activeImage-1].product;
        }
        
      } catch (error) {
        console.log(error);
      }
    },
    checkoutCart(state) {
      state.checkoutState =true;
      setTimeout(() => {
        if (state.checkoutState === true) {
          state.checkoutState=false;
        }
      }, 4000);
      state.setCartValue = null;
      state.addToCartCount = null;
      state.count = 0;
    },
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
// createApp(App).mount('#app')
