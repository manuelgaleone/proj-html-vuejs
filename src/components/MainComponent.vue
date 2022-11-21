<script>
import HeaderComponent from "../components/HeaderComponent.vue"

export default {
  components:{
    HeaderComponent,
  }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <div class="main_jumbo">
    <div class="jumbo_container">
        <div class="row">
            <div class="col">
                
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main_jumbo {
    background-image: url("../assets/img/hero-header-bakery.jpg");
    height: 750px;
    background-size: cover;
}

.jumbo_subtitle {
    color: black;
}
</style>