<script>
export default {
    name: "Footer Component",
    data() {
        return {
            footerMenuItems:[
                {
                    "name": "Shop",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "About",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "Gallery",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "Locations",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "Journal",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "Contact",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "Orders",
                    "link": "bakery.com",
                    "active": false
                }
                ]}
        }
    }
</script>

<template>
    <div class="container_100_leftright">
        <div class="footer_content p-0">
            <div class="row align_items justify_between">
                <!--Left Elements-->
                <div class="col-6">
                    <div class="left_elements">
                        <img class="footer_logo" src="../assets/img/avada-bakery-logo-retina-300x145.png" alt="Bakery logo">
                        <div class="navigation_content d-flex align_items justify_start">
                            <ul class="d-flex align_items justify_end m-0 p-0">
                                <li class="menu_element px-2 py-4" v-for="item in footerMenuItems">
                                    <a class="menu_item pb-2" :class="{ active: item.active }" :href="item.link">{{item.name}}</a>
                                </li>
                                <div class="cart_footer d_flex align_items">
                                    <i class="fa-solid fa-cart-shopping cart_icon px-4"></i>
                                    <div class="cart_badge">
                                        0
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <div class="copyright_footer py-5">
                            <p class="subtitle">
                                &copy; Copyright 2022 | Made by Manuel
                            </p>
                        </div>
                    </div>
                </div>
                <!--//Left Elements-->
                <!--Right Elements-->
                <div class="col-6">
                    <div class="right_content">
                        <div class="small_title d_flex justify_end py-4">
                            Subscribe to our Newsletter
                        </div>
                        <div class="newsletter_form d_flex align_items justify_end">
                            <input type="text" placeholder="Enter email address*" class="form_mail">
                            <button class="violet_button ml_3" >Subscribe</button>
                        </div>
                        <div class="social_icons py-5 d_flex align_items justify_end">
                            <div class="social">
                                <i class="fa-brands fa-instagram social_footer pr_4"></i>
                                <i class="fa-brands fa-twitter social_footer pr_4"></i>
                                <i class="fa-brands fa-facebook-f social_footer pr_4"></i>
                                <i class="fa-brands fa-pinterest-p social_footer"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <!--//Right Elements-->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer_content {
    padding-top: 75px;
    padding-bottom: 75px;
}
.footer_logo {
    width:150px;
}

.cart_badge {
    background-color: #bda2f3;
    color: #5b2ca2;
    border-radius: 70%;
    font-size: 12px;
    width: 20px;
    height: 20px;
    text-align: center;
}

.form_mail {
    border: 0.5px solid #929292;
    padding: 5px;
    border-radius: 5px;
    width: 250px;
    height: 40px;
}

.social_footer {
    color: #5b2ca2;
    font-size: 20px;
}

.social_footer:hover {
    color: #bda2f3;
    transition: 0.4s;
    cursor: pointer;
}
</style>