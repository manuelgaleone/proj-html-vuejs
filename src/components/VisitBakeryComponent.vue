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
    <div class="pb-15 pt-15 container_100_leftright">
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
                <div v-for="bakery in bakeries" class="col-6 p-0 d_flex justify_end">
                    <div class="newyork_content">
                        <img class="bakery_image" :src="bakery.img" alt="Bakery content">
                        <div class="bakery_elements">
                            <h4 class="small_title">
                                {{bakery.location}}
                            </h4>
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
</style>