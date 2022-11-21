<script>
export default {
    name: "Wedding Grid Component"
}
</script>

<template>
<div class="wedding_grid_container">
    <div class="row py-5 justify_around">
        <div class="col-6 wedding_grid_images d_flex justify_center">
            <img class="wedding_images" src="../assets/img/corporate-bg.jpg" alt="Wedding image">
            <div class="image_hover d_flex justify_center">
                <img class="wedding_images" src="../assets/img/corporate-hover-bg.jpg" alt="Wedding image">
                <div class="corporate_texts d_flex column justify_center text-center">
                    <p class="subtitle_wedding m-0">INTERNATIONAL BAKERY</p>
                    <h4 class="small_wedding_title py-2">Corporate Events</h4>
                    <a class="wedding_button" href="#">Explore more</a>
                </div>
            </div>
        </div>
        <div class="col-6 wedding_grid_images d_flex justify_center">
            <img class="wedding_images" src="../assets/img/wedding-bg.jpg" alt="Wedding image">
            <div class="image_hover d_flex justify_center">
                <img class="wedding_images" src="../assets/img/wedding-hover-bg.jpg" alt="Wedding image">
                <div class="corporate_texts d_flex column justify_center text-center">
                    <p class="subtitle_wedding m-0">PRIVATE DINING HALL</p>
                    <h4 class="small_wedding_title py-2">Weddings & Parties</h4>
                    <a class="wedding_button" href="#">Explore more</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.wedding_images {
    max-width: 100%;
}

.wedding_grid_images {
    position: relative;
    .image_hover {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
    }
    
    .image_hover:hover {
        opacity: 1;
        transition: 0.4s;
    }

}

.small_wedding_title {
    color: white;
    font-size: 25px;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
}

.subtitle_wedding {
    color: #d5d5d5;
    font-size: 13px;
}

.wedding_button {
    display: inline-block;
    color: white;
    padding: 10px;
    font-size: 13px;
    border-radius: 5px;
    background-color: #5b2ca2;
    text-decoration: none;
    width: 125px;
    margin-left: auto;
    margin-right: auto;
}

.wedding_button:hover {
    background-color: #bda2f3;
    color: #5b2ca2;
    transition: 0.4s;
}
.corporate_texts {
    opacity: 1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>