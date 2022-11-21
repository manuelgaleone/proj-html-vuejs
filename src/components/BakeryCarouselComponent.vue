<script>
import LongCarouselComponent from '../components/LongCarouselComponent.vue'

export default {
    name: "Bakery Carousel Component",
    components: {
        LongCarouselComponent
    }
}
</script>

<template>
    <div class="pt-10 pb-10 container_100_leftright">
        <div class="row">
            <div class="col-3 text-center d_flex column justify_center">
                <h2 class="small_title">
                    Find a freshly baked <br>
                    product perfect for you
                </h2>
                <p class="small_caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Quas est corrupti iure recusandae nam quaerat laudantium.
                </p>
                <a class="long_carousel_button" href="#">Shop All Products</a>
            </div>
            <div class="col-9">
                <LongCarouselComponent></LongCarouselComponent>
            </div>
        </div>
    </div>
</template>

<style>
.long_carousel_button {
    display: inline-block;
    color: white;
    padding: 10px;
    font-size: 13px;
    border-radius: 5px;
    background-color: #5b2ca2;
    text-decoration: none;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
}

.long_carousel_button:hover {
    background-color: #bda2f3;
    color: #5b2ca2;
    transition: 0.4s;
}
</style>