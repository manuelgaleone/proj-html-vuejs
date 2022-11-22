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
  <div class="pb-15 container_100_leftright">
    <!--Weddings Texts-->
    <div class="weddings_titles">
        <p class="subtitle text-center">
            CORPORATE & WEDDINGS
        </p>
        <h3 class="small_title text-center">
            Baking Special Moments
        </h3>
    </div>
    <!--//Weddings Texts-->
    <!--Weddings Grids-->
    <WeddingGridsComponent></WeddingGridsComponent>
    <!--//Weddings Grids-->
  </div>
</template>

<style lang="scss" scoped>

</style>