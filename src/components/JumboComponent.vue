<script>
export default {
    name: "Jumbo Component"
}
</script>

<template>
  <div class="main_jumbo">
    <div class="jumbo_container">
        <div class="row">
            <div class="col jumbo_elements">
                <p class="jumbo_subtitle">
                    FRESH & TASTY BAKERY EVERY DAY
                </p>
                <h1 class="jumbo_title">
                    The Perfect Fresh <br>
                    Bread
                </h1>
                <p class="jumbo_caption">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br>
                    Rem ducimus eveniet molestiae laborum totam nobis modi temporibus? <br>
                    Eaque, excepturi debitis voluptatum sit.
                </p>
                <a class="jumbo_button" href="#">Explore our products</a>
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

.jumbo_elements {
    padding-left: 100px;
}

.jumbo_subtitle {
    color: #929295;
    font-size: 13px;
}

.jumbo_title {
    color: #5b2ca2;
    font-size: 50px;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
}

.jumbo_caption {
    color: #929295;
    font-size: 13px;
}

.jumbo_button {
    display: inline-block;
    background-color: white;
    color: #5b2ca2;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 13px;
    width: 200px;
    text-align: center;
}

.jumbo_button:hover {
    background-color: #5b2ca2;
    color: white;
    transition: 0.4s;
}
</style>