<template>
    <div class="hidden md:flex justify-between md:mt-5 gap-1">

        <div v-for="({ shoe, id }, index) in shoes" :key="index" @click="handleImage(id)"
            class="cursor-pointer rounded-xl bg-white overflow-hidden active outline-2 outline outline-[#ff7d1a] duration-200">
            <img :src="shoe" :alt="index" class="hover:opacity-30 lg:h-[90px] xl:h-[100px]" :class="classObject(id)" />
        </div>
        <!-- <div class="cursor-pointer rounded-xl bg-white overflow-hidden">
            <img src="../../images/image-product-2-thumbnail.jpg" alt="shoe"
                class="hover:opacity-30 lg:h-[90px] xl:h-[100px]" />
        </div>
        <div class="cursor-pointer rounded-xl bg-white overflow-hidden">
            <img src="../../images/image-product-3-thumbnail.jpg" alt="shoe"
                class="hover:opacity-30 lg:h-[90px] xl:h-[100px]" />
        </div>
        <div class="cursor-pointer rounded-xl bg-white overflow-hidden">
            <img src="../../images/image-product-4-thumbnail.jpg" alt="shoe"
                class="hover:opacity-30 lg:h-[90px] xl:h-[100px]" />
        </div> -->
    </div>
</template>
<script>

import { mapState, mapMutations } from 'vuex'


export default {
    name: "HeroImages",
    data() {
        return {

            isActive: 1,
            error: 1
        }
    },
    components: {

    },
    computed: {
        ...mapState(["shoes", "activeImage"]),
        classObject() {
            return id => {
                if (id === this.$store.state.activeImage) return 'opacity-30';
                // In this way you can maintain as many classNames you want based on the condition
            }

        }
    },
    methods: {
        ...mapMutations(["handleImage"]),
    },
}
</script>
<style >

</style>
  