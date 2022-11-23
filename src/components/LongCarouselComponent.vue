<script>
import {longcarouseldata} from "../longcarouseldata.js"

export default {
    name:"Long Carousel Component",
    data() {
        return {
            longcarouseldata
        }
    }
}
</script>

<template>
    <div class="long_carousel d_flex align_items justify_end">
        <div class="long_carousel_elements d_flex align_items">
            <div v-for="element in longcarouseldata.longCarouselElements" class="pl-5">
                <!--Long Carousel-->
                <div class="carousel_image_container">
                    <img class="long_carousel_image" :src="element.img" alt="Product Image">
                    <div class="carousel_texts d_flex column justify_center">
                        <p class="carousel_options">SELECT OPTIONS / QUICK VIEW</p>
                    </div>
                </div>
                <div class="carousel_product_elements text-center py-3">
                    <h3 class="small_product_title">
                        {{element.name}}
                    </h3>
                    <p class="small_price">
                        {{element.prezzo}}
                    </p>
                </div>
            </div>
            <!--//Long Carousel-->
            <!--Arrows-->
            <div class="left_arrow d_flex column justify_center">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="right_arrow d_flex column justify_center">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <!--//Arrows-->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.long_carousel {
    position: relative;
}
.long_carousel_elements {
    position: relative;
}

.long_carousel_image {
    width: 250px;
}

.active {
    display: inline-block;
}

.left_arrow {
    background-color: #5b2ca2;
    opacity: 0.5;
    padding: 10px;
    height: 50px;
    cursor: pointer;
    color: white;
    position: absolute;
    margin-left: 35px;
}

.left_arrow:hover {
    transition: 0.4s;
    background-color: #bda2f3;
}

.right_arrow {
    background-color: #5b2ca2;
    opacity: 0.5;
    padding: 10px;
    height: 50px;
    cursor: pointer;
    color: white;
    position: absolute;
    right: 0;
}

.right_arrow:hover {
    transition: 0.4s;
    background-color: #bda2f3;
}

.carousel_image_container {
    position: relative;

}

.carousel_texts {
    opacity: 0;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
}

.carousel_name {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    font-weight: 700;
    color: white;  
}

.carousel_options {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: white;
}

.carousel_tipe {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: white;
}

.carousel_image_container:hover {

    .carousel_texts {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.253);
        transition: 0.4s;
        cursor: pointer;
    }
}

.small_product_title {
    font-family: 'Playfair Display', serif;
    color: #5b2ca2;
    font-weight: 500;
    font-size: 23px;
}

.small_price {
    color: #5b2ca2;
    font-weight: 100;
    font-size: 13px;
}
</style>