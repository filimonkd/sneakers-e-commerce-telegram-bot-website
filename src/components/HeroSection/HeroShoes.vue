<template>
    <!-- images   -->
    <div class="w-full md:w-[40%]">
        <!-- desktop display     -->
        <div
            class="hidden md:block h-[420px] object-contain md:h-auto overflow-hidden md:rounded-3xl cursor-pointer">
            <img :src="productImage" alt="shoe"/>
        </div>

        <!-- mobile display     -->
        <div class="relative md:hidden h-auto object-contain overflow-hidden cursor-pointer">
            <button class="imagesMobileBtn left-[10px]" @click="handleMobImageback()">
                &#60;
            </button>
            <img :src="productImage" alt="shoe" />
            <button class="imagesMobileBtn right-[10px]" @click="handleMobImage()">
                &#62;
            </button>
        </div>

        <!-- mobile display end   -->
        <!-- other images    -->
        <HeroImages />
    </div>
</template>
<script>
// This starter template is using Vue 3 <script setup> SFCs

import HeroImages from './HeroImages.vue';
import { mapState, mapMutations } from 'vuex'

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    name: "HeroShoes",
    components: {
        HeroImages
    },
    computed: {
        ...mapState(["productImage"]),
    },
    methods: {
        ...mapMutations(["handleMobImage","handleMobImageback"]),
    },
}
</script>
<style >

</style>
  