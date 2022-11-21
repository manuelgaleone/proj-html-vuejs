<script>
export default {
    name:"Small Carousel",
    data() {
        return {
            carouselElements:[
            {
                name: "Super Biscotti",
                tipo: "Biscotti",
                prezzo: "$19.00 - $25.00",
                img:"../src/assets/img/choco-chip-cookies-400x510.jpg",
                active: true
            },
            {
                name: "Super Cuoricini",
                tipo: "Biscotti",
                prezzo: "$23.00 - $29.00",
                img:"../src/assets/img/strawberry-jam-cookies-400x510.jpg",
                active: true
            }
            ]
        }
    }
}
</script>

<template>
    <div class="small_carousel d_flex align_items justify_center">
        <div class="small_carousel_elements d_flex align_items">
            <div v-for="element in carouselElements">
                <div class="carousel_image_container">
                    <img :class="{ active: element.active }" class="small_carousel_image" :src="element.img" alt="Product Image">
                    <div class="carousel_texts d_flex column justify_center">
                        <h3 class="carousel_name">{{element.name}}</h3>
                        <h4 class="carousel_tipe">{{element.tipo}}</h4>
                        <p class="carousel_price">{{element.prezzo}}</p>
                    </div>
                </div>
            </div>
            <div class="left_arrow">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div class="right_arrow">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.small_carousel_elements {
    position: relative;
}

.small_carousel_image {
    width: 450px;
}

.active {
    display: inline-block;
}

.left_arrow {
    background-color: #5b2ca2;
    opacity: 0.5;
    padding: 10px;
    cursor: pointer;
    color: white;
    position: absolute;
    left: 0;
}

.left_arrow:hover {
    transition: 0.4s;
    background-color: #bda2f3;
}

.right_arrow {
    background-color: #5b2ca2;
    opacity: 0.5;
    padding: 10px;
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

.carousel_price {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
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

</style>