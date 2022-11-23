<script>
export default {
    name: "In Touch Component"
}
</script>

<template>
    <div class=" pb-15 container_100_leftright">
        <div class="intouch_contents">
            <div class="row">
                <div class="col-3">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-1.jpg" alt="Get in touch images">
                    </div>
                </div>
                <div class="col-6">
                    <div class="intouch_elements d_flex column justify_center">
                        <div class="intouch_texts p-5 text-center">
                            <p class="subtitle">
                                MADE FOR SHARING
                            </p>
                            <h3 class="small_title py-2">
                                Let's stay in touch
                            </h3>
                            <a class="violet_button" href="#"><i class="fa-brands fa-instagram color_white px-2"></i>Follow us</a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-2.jpg" alt="Get in touch images">
                    </div>
                </div>
                <div class="col-3 py-4">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-3.jpg" alt="Get in touch images">
                    </div>
                </div>
                <div class="col-3 py-4">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-4.jpg" alt="Get in touch images">
                    </div>
                </div>
                <div class="col-3 py-4">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-5.jpg" alt="Get in touch images">
                    </div>
                </div>
                <div class="col-3 py-4">
                    <div class="intouch_photo">
                        <img class="intouch_images" src="../assets/img/social-6.jpg" alt="Get in touch images">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.intouch_images {
    max-width: 100%;
}

.intouch_images:hover {
    cursor: pointer;
    border: 5px solid white;
    transition: 0.4s;
}

.intouch_elements {
    background-color: #F1EDF5;
    height: 100%;
}
</style>