<script>
export default {
    name: "Our Products Component",
    data() {
        return {
            carouselElements:[
            {
                name: "Super Biscotti",
                tipo: "Biscotti",
                prezzo: "$19.00 - $25.00",
                img:"./assets/img/choco-chip-cookies-400x510.jpg"
            },
            {
                name: "Super Cuoricini",
                tipo: "Biscotti",
                prezzo: "$23.00 - $29.00",
                img:"./assets/img/strawberry-jam-cookies-400x510.jpg"
            },
            {
                name: "Ciambelline Fragoline",
                tipo: "Ciambelline",
                prezzo: "$11.00 - $22.00",
                img:"./assets/img/strawberry-donut-400x510.jpg"
            }
            ]
        }
    }
}
</script>

<template>
  <div class="our_products_content container_100_leftright">
    <div class="row">
        <!--Left Text elements-->
        <div class="col-4">
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
        <div class="col-8">
            <div v-for="element in carouselElements" class="carousel_elements d-flex align_items">
                <img class="small_carousel_image" :src="element.img" alt="Product Image">
            </div>
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

.small_carousel_image {
    width: 350px;
}
</style>