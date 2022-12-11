<template>
  <div class="cartDiv">
    <h1 class="h-full py-2 pl-5 font-bold border-b-2 border-gray-300">
      Cart
    </h1>

    <div class="py-5 grid place-items-center gap-5">

      <p v-if="setCartValue === null" class="font-bold text-xl">Your cart is empty.</p>
      <button v-if="setCartValue === null" @click="showCart = !showCart"  class="bg-[#ff7d1a] px-4 py-2 text-white font-bold">
        Close
      </button>

      <!-- <div class="flex flex-col gap-4 items-center ">
            <img
              src="https://c.tenor.com/qM6fp_G04OwAAAAj/tick-tick-verified.gif"
              alt="check"
              class="h-[100px]"
            />
            <p class="font-bold text-xl ">Your order is on the way</p>
          </div> -->


        <div v-if="setCartValue != null" class="flex items-center gap-x-3 justify-between w-[90%] ">
          <img src="../../images/image-product-1.jpg" alt="shoe1" class="h-[60px] rounded-lg" />
          <div class="font-medium text-gray-400 ">
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x {{count}}:
              <span class="font-bold text-black">
                ${{setSneakersPrice}}
              </span>
            </p>
          </div>
          <img src='../../images/icon-delete.svg' alt="delete" @click="deleteCart()" class="h-[20px] cursor-pointer" />
        </div>
        <button v-if="setCartValue != null" class="checkoutBtn">
          Checkout
        </button>
    </div>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex'


export default {
  name: "CartIcon",
  data() {
    return {
      showCart:true
    };
  },
  methods: {
    ...mapMutations(["deleteCart","showCartHandler"])
  },
  computed: {
    ...mapState(["setCartValue","setSneakersPrice","count"])
  }
}
</script>

<style>

</style>