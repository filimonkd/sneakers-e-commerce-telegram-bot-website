<template>
    <!-- images   -->
    <div class="w-full md:w-[40%]">
        <!-- desktop display     -->
        <div
            class="hidden md:block h-[420px] object-contain md:h-auto overflow-hidden md:rounded-3xl cursor-pointer">
            <img src="../../images/image-product-1.jpg" alt="shoe" onClick={onLightbox} />
        </div>

        <!-- mobile display     -->
        <div class="relative md:hidden h-auto object-contain overflow-hidden cursor-pointer">
            <button class="imagesMobileBtn left-[10px]" onClick={prevBtn}>
                &#60;
            </button>
            <img src="../../images/image-product-1.jpg" alt="shoe" />
            <button class="imagesMobileBtn right-[10px]" onClick={nextBtn}>
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

// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    name: "HeroShoes",
    components: {
        HeroImages
    }
}
</script>
<style >

</style>
  