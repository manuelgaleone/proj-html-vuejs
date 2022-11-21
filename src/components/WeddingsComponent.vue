<script>
import WeddingGridsComponent from "../components/WeddingGridsComponent.vue"

export default {
    name: "Weddings Component",
    components: {
        WeddingGridsComponent
    }
}
</script>

<template>
  <div class="pt-10 pb-10 container_100_leftright">
    <div class="weddings_titles">
        <p class="subtitle text-center">
            CORPORATE & WEDDINGS
        </p>
        <h3 class="small_title text-center">
            Baking Special Moments
        </h3>
    </div>
    <WeddingGridsComponent></WeddingGridsComponent>
  </div>
</template>

<style lang="scss" scoped>

</style>