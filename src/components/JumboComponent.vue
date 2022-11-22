<script>
export default {
    name: "Jumbo Component"
}
</script>

<template>
  <div class="main_jumbo">
    <div class="jumbo_container">
        <div class="row">
            <div class="col jumbo_elements container_100_leftright">
                <p class="subtitle">
                    FRESH & TASTY BAKERY EVERY DAY
                </p>
                <h1 class="big_title">
                    The Perfect Fresh <br>
                    Bread
                </h1>
                <p class="small_caption">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br>
                    Rem ducimus eveniet molestiae laborum totam nobis modi temporibus? <br>
                    Eaque, excepturi debitis voluptatum sit.
                </p>
                <a class="white_button" href="#">Explore our products</a>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main_jumbo {
    background-image: url("../assets/img/hero-header-bakery.jpg");
    background-size: cover;
    padding-top: 300px;
    padding-bottom: 300px;
}

.jumbo_container {
    overflow: hidden;
}


</style>