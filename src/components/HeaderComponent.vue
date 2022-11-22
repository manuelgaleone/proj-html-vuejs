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
  <div class="header_content p-3">
    <div class="header_container">
        <div class="row justify-between align_items">
            <!--Left Logo-->
            <div class="col-4">
                <img class="header_logo" src="../assets/img/avada-bakery-logo-retina-300x145.png" alt="Bakery logo">
            </div>
            <!--//Left Logo-->
            <!--Right Menù-->
            <div class="col-8 px-4">
                <div class="navigation_content d-flex align_items justify_end">
                    <ul class="d-flex align_items justify_end m-0">
                        <li class="menu_element px-3" v-for="item in menuItems">
                            <a class="menu_item pb-2" :class="{ active: item.active }" :href="item.link">{{item.name}}</a>
                        </li>
                    </ul>
                    <i class="fa-solid fa-cart-shopping cart_icon px-4"></i>
                </div>
            </div>
            <!--//Right Menù-->
        </div>
    </div>
  </div>
</template>

<style lang="scss">
.header_content {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color:(0,0,0);
    position: absolute;
    width: 100%;
}
.header_container {
    background-color:transparent;
}

.header_logo {
    width: 150px;
}
.menu_element {
    list-style-type: none;
}

.menu_item {
    text-decoration: none;
    color: #bda2f3;
    font-size: 13px;
}

.menu_item:hover {
    transition: 0.4s;
    color: #5b2ca2;
    border-bottom: 2px solid #5b2ca2;
}

.cart_icon {
    color: #bda2f3;
    width: 20px;
    
}

.cart_icon:hover {
    transition: 0.4s;
    color: #5b2ca2;
    cursor: pointer;
}

.active {
    border-bottom: 2px solid #5b2ca2;
}
</style>