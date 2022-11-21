<script>
import SmallCarousel from "../components/SmallCarousel.vue"

export default {
    name: "Our Products Component",
    components: {
        SmallCarousel
    }
}
</script>

<template>
  <div class="our_products_content container_100_leftright">
    <div class="row">
        <!--Left Text elements-->
        <div class="col-4 p-0">
            <p class="subtitle">
                OUR PRODUCTS
            </p>
            <h2 class="small_title">
                All our detectable pastries are <br>
                backed fresh in our Kitchen very <br>
                morning, and are made with all- <br>
                natural, organic ingridients.
            </h2>
            <a class="violet_button mt-5 px-4" href="#">Start Shopping</a>
        </div>
        <!--//Left Text elements-->
        <!--Right Small carousel-->
        <div class="col-8 p-0">
            <SmallCarousel></SmallCarousel>
        </div>
        <!--//Right Small carousel-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.our_products_content {
    padding-top: 100px;
    padding-bottom: 100px;
}

</style>