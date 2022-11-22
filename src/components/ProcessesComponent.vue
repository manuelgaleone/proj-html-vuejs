<script>
export default {
    name:"Processes Component"
}

</script>

<template>
    <!--First process-->
    <div class="pt-10 pb-10 container_100_leftright">
        <div class="mind_container">
            <div class="mind_container_elements row align_items justify_between">
                <!--Phrase-->
                <div class="col-6">
                    <h2 class="process_title">
                        Tell us what you have in <br>
                        mind
                    </h2>
                </div>
                <!--//Phrase-->
                <!--Number-->
                <div class="col-6 d_flex justify_end">
                    <p class="process_number">
                        01
                    </p>
                </div>
                <!--//Number-->
                <!--Caption-->
                <div class="col-3 mind_caption">
                    <p class="subtitle">
                        MANUAL INGREDIENTS SELECTION
                    </p>
                    <p class="caption">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                        Voluptas magnam ipsam expedita repellat similique voluptate <br>
                        ipsum rem voluptatem harum natus facere commodi quisquam, <br>
                        eligendi ea nisi esse aliquid enim et!
                    </p>
                </div>
                <!--//Caption-->
            </div>
        </div>
    </div>
    <!--//First process-->
    <!--Second process-->
    <div class="container_100_leftright">
        <div class="baking_container">
            <div class="row justify_between mx-0 py-4">
                <!--Left-->
                <div class="col-6">
                    <div class="start_baking row align_items justify_between">
                        <div class="col-6">
                            <h2 class="process_title">
                            We start Baking
                            </h2>
                        </div>
                        <div class="col-6 d_flex justify_end">
                            <p class="process_number">
                                02
                            </p>
                        </div>
                        <div class="col-4 baking_caption">
                            <p class="subtitle">
                                SELECT & DELICIOUS
                            </p>
                            <p class="caption">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                                Voluptas magnam ipsam expedita repellat similique voluptate <br>
                                ipsum rem voluptatem harum natus facere commodi quisquam, <br>
                                eligendi ea nisi esse aliquid enim et!
                            </p>
                        </div>
                    </div>
                </div>
                <!--//Left-->
                <!--Right-->
                <div class="col-6 pl-5 pr-0">
                    <div class="baking_phrase d_flex justify_center column">
                        <div class="d_flex column justify_center">
                            <p class="subtitle">
                                DON'T TAKE OUR WORD FOR IT
                            </p>
                            <h2 class="medium_title">
                                "Finally found an alternative to <br>
                                the mass produced products. <br>
                                Something that incorporates <br>
                                real organic ingredients, <br>
                                nutrient dense wellness while <br>
                                promoting sustainability and <br>
                                activity"
                            </h2>
                            <p class="subtitle">
                                Rachel Cooper, Founder
                            </p>
                        </div>
                    </div>
                </div>
                <!--//Right-->
            </div>
        </div>
    </div>
    <!--//Second process-->
    <!--Third process-->
    <div class="pt-10 pb-10 container_100_leftright">
        <div class="delivered_container">
            <div class="mind_container_elements row align_items justify_between">
                <!--Phrase-->
                <div class="col-6">
                    <h2 class="process_title">
                        Delivered to your home
                    </h2>
                </div>
                <!--//Phrase-->
                <!--Number-->
                <div class="col-6 d_flex justify_end">
                    <p class="process_number">
                        03
                    </p>
                </div>
                <!--//Number-->
                <!--Caption-->
                <div class="col-3 delivered_caption">
                    <p class="subtitle">
                        BAKED TO ORDER & GIFTER WRAPPER
                    </p>
                    <p class="caption">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
                        Voluptas magnam ipsam expedita repellat similique voluptate <br>
                        ipsum rem voluptatem harum natus facere commodi quisquam, <br>
                        eligendi ea nisi esse aliquid enim et!
                    </p>
                </div>
                <!--//Caption-->
            </div>
        </div>
    </div>
    <!--//Third process-->
</template>

<style lang="scss" scoped>
.mind_container {
    background: linear-gradient(180.2deg, rgba(0, 0, 0, 0.392) 6.8%, rgba(74, 98, 110, 0.38) 131%),
                url("../assets/img/bakery-process-1.jpg") no-repeat center center/cover;
    padding: 75px;
}

.start_baking {
    background: linear-gradient(180.2deg, rgba(0, 0, 0, 0.392) 6.8%, rgba(74, 98, 110, 0.38) 131%),
                url("../assets/img/bakery-process-2.jpg") no-repeat center center/cover;
    padding: 75px;
}

.delivered_container {
    background: linear-gradient(180.2deg, rgba(0, 0, 0, 0.392) 6.8%, rgba(74, 98, 110, 0.38) 131%),
                url("../assets/img/bakery-process-3.jpg") no-repeat center center/cover;
    padding: 75px;
}

.baking_phrase {
    background-color: #F4EEF3;
    padding: 75px;
    height: 100%;
}

.process_title {
    color: white;
    font-size: 40px;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
}

.process_number {
    font-family: 'Montserrat', sans-serif;
    font-size: 55px;
    color: white;
}

.subtitle {
    color: rgb(210, 210, 210);

}

.caption {
    color: white;
    font-size: 13px;
}

.mind_caption {
    margin-left: auto;
    padding-top: 250px;
}

.baking_caption {
    margin-right: auto;
    padding-top: 250px;
}

.delivered_caption {
    margin-right: auto;
    padding-top: 250px;
}
</style>