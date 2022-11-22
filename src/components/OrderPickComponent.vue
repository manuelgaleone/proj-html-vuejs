<script>
export default {
    name: "Order Pick Component"
}
</script>

<template>
    <div class="container_50_topbottom">
        <!--Section Texts-->
        <div class="pick_content container_300_leftright container_50_topbottom ">
            <p class="pick_subtitle">
                TRY OUR SEASONAL PRODUCTS
            </p>
            <h3 class="pick_title">
                Order for pick-up or delivery to <br>
                your home
            </h3>
            <a class="white_pick_button my-5" href="#">Shop now</a>
        </div>
        <!--//Section Texts-->
    </div>
</template>

<style lang="scss" scoped>

.pick_content {
    background: linear-gradient(180.2deg, rgba(0, 0, 0, 0.392) 6.8%, rgba(74, 98, 110, 0.38) 131%),
                url("../assets/img/pexels-photo-103124.webp") no-repeat center center/cover;
    
}
.pick_title {
    color: white;
    font-size: 25px;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
}

.pick_subtitle {
    color: #c6c6c6;
    font-size: 13px;
}

.white_pick_button {
    display: inline-block;
    background-color: white;
    color: #5b2ca2;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 13px;
    text-align: center;
    width: 100px;
}

.white_pick_button:hover {
    background-color: #5b2ca2;
    color: white;
    transition: 0.4s;
}
</style>