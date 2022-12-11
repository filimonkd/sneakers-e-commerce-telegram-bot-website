<template>
    <main class="hero">
      <!-- <HeroLightbox /> -->
      <HeroShoes  />
      <HeroText />
    </main>
</template>
<script>
import HeroLightbox from './HeroLightbox.vue';
import HeroShoes from './HeroShoes.vue';
import HeroText from './HeroText.vue';

export default {
    name: "Hero",
    components: {
        HeroLightbox,
        HeroShoes,
        HeroText
    }
}
</script>
<style >

</style>
  