<template>
    <!-- text  -->
    <div class="w-[90%] md:w-[50%] flex flex-col my-5 mx-auto gap-y-4 ">
        <p class="text-[#ff7d1a] font-bold">SNEAKER COMPANY</p>
        <p class="text-4xl lg:text-5xl font-bold ">
            Fall Limited Edition Sneakers
        </p>
        <p class="text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
        </p>

        <!-- price  -->
        <div class="flex flex-row items-center md:items-start justify-between md:flex-col">
            <p class="text-2xl font-bold md:mb-3 ">
                $125.00
                <span class="bg-[#ffede0] text-[#ff7d1a] ml-2 text-sm p-1 rounded-lg">
                    50%
                </span>
            </p>
            <del class="text-gray-400 font-bold">$250.00</del>
        </div>

        <!-- buttons  -->
        <div class="flex justify-between flex-col lg:flex-row">
            <div class="heroTextBtn">
                <img src="../../images/icon-minus.svg" alt="" @click="subtractFromCount(value)" class=" hover:opacity-50 cursor-pointer ">
                <p> {{count}} </p>
                <img src="../../images/icon-plus.svg" alt="" @click="addToCount(value)" class=" hover:opacity-50 cursor-pointer ">
            </div>
            <button @click="addCartHandler()" class="addCart">
                <img src="../../images/icon-cart-white.svg" alt="">
                <p class="text-white font-bold">Add to cart</p>
            </button>
        </div>
    </div>
</template>
<script>

import {mapState,mapMutations} from 'vuex'


export default {
    name: "HeroText",
    components: {
        
    },
    data() {
      return {
        value:1
      };
    },
    methods: {
      ...mapMutations(["addToCount","subtractFromCount","addCartHandler"]),
    },
    computed:{
        ...mapState(["count"])
    }
}
</script>
<style >

</style>
  