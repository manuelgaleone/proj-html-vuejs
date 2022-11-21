<script>
export default {
    data(){
        return {
            menuItems:[
                {
                    "name": "HOME",
                    "link": "bakery.com",
                    "active": true
                },
                {
                    "name": "SHOP",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "ABOUT",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "GALLERY",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "LOCATIONS",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "JOURNAL",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "CONTACT",
                    "link": "bakery.com",
                    "active": false
                },
                {
                    "name": "MY ACCOUNT",
                    "link": "bakery.com",
                    "active": false
                }
                ]}
    }
}
</script>

<template>
  <div class="header_content p-4">
    <div class="header_container">
        <div class="row justify-between align_items">
            <!--Left Logo-->
            <div class="col-4">
                <img class="header_logo" src="../assets/img/avada-bakery-logo-retina-300x145.png" alt="Bakery logo">
            </div>
            <!--//Left Logo-->
            <!--Right Menù-->
            <div class="col-8">
                <div class="navigation_content d-flex align_items justify_end">
                    <ul class="d-flex align_items justify_end m-0">
                        <li class="menu_element px-4" v-for="item in menuItems">
                            <a class="menu_item pb-2" :class="{ active: item.active }" :href="item.link">{{item.name}}</a>
                        </li>
                    </ul>
                    <i class="fa-solid fa-cart-shopping cart_icon"></i>
                </div>
            </div>
            <!--//Right Menù-->
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.header_logo {
    width: 150px;
}
.menu_element {
    list-style-type: none;
}

.menu_item {
    text-decoration: none;
    color: #5b2ca2;
    font-size: 13px;
}

.cart_icon {
    color: #5b2ca2;
    width: 20px;
    
}

.active {
    border-bottom: 2px solid #5b2ca2;
}
</style>