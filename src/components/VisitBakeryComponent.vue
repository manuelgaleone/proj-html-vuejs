<script>
export default {
    name: "Visit Bakery Component",
    data() {
        return {
            bakeries: [
                {
                    location:"New York",
                    number:"1.800.456.789",
                    hours:"9.0 AM - 6.00 PM",
                    img:"../src/assets/img/new-york-bk-800x530.jpg"
                },
                {
                    location:"London",
                    number:"1.800.456.789",
                    hours:"9.0 AM - 6.00 PM",
                    img:"../src/assets/img/london-bk-800x530.jpg"
                }
            ]
        }
    }
}
</script>

<template>
    <div class="pt-15 pb-15 container_100_leftright">
        <!--Top texts-->
        <div class="top_titles text-center">
            <p class="subtitle">
                LOCATIONS
            </p>
            <h3 class="small_title">
                Visit our Bakeries
            </h3>
        </div>
        <!--//Top texts-->
        <!--Bakeries-->
        <div class="bakeries_container py-5">
            <div class="row justify_center">
                <!--Bakery-->
                <div class="col-6 p-0 d_flex justify_end">
                    <div class="bakery_location_card">
                        <img class="bakery_image" src="../assets/img/new-york-bk-800x530.jpg" alt="Card image cap">
                        <div class="newyork_texts p-2">
                            <div class="newyork_elements">
                                <h2 class="small_title text-center py-4">
                                    New York
                                </h2>
                                <div class="d_flex align_items justify_between">
                                    <div class="col-4 text-center">
                                         <p class="subtitle py-1">
                                            CALL US
                                         </p>
                                         <p class="subtitle">
                                            1.800.458.492
                                         </p>
                                    </div>
                                    <div class="col-4 text-center">
                                         <p class="subtitle py-1">
                                            OPEN ALL WEEK
                                         </p>
                                         <p class="subtitle">
                                            9.00 AM - 6.00 PM
                                         </p>
                                    </div>
                                    <div class="col-4 text-center ">
                                         <a class="bakery_button" href="#">View Map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 p-0 d_flex justify_start">
                    <div class="bakery_location_card">
                        <img class="bakery_image" src="../assets/img/london-bk-800x530.jpg" alt="Card image cap">
                        <div class="london_texts p-2">
                            <div class="london_elements">
                                <h2 class="small_title text-center py-4">
                                    London
                                </h2>
                                <div class="d_flex align_items justify_between">
                                    <div class="col-4 text-center">
                                            <p class="subtitle py-1">
                                            CALL US
                                            </p>
                                            <p class="subtitle">
                                            1.800.458.492
                                            </p>
                                    </div>
                                    <div class="col-4 text-center">
                                            <p class="subtitle py-1">
                                            OPEN ALL WEEK
                                            </p>
                                            <p class="subtitle">
                                            9.00 AM - 6.00 PM
                                            </p>
                                    </div>
                                    <div class="col-4 text-center ">
                                            <a class="bakery_button" href="#">View Map</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--//Bakery-->
            </div>
        </div>
        <!--//Bakeries-->
    </div>
</template>

<style lang="scss" scoped>
.bakery_image {
    width: 750px;
}

.newyork_texts {
    background-color: #F1F9FB;
}

.london_texts {
    background-color: #FAF3E3;
}

.bakery_button {
    display: inline-block;
    background-color: white;
    color: #5b2ca2;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 13px;
    width: 100px;
    text-align: center;
}

.bakery_button:hover {
    background-color: #5b2ca2;
    color: white;
    transition: 0.4s;
}
</style>