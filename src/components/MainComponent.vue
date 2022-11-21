<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import JumboComponent from "../components/JumboComponent.vue"
import OurProductsComponent from "../components/OurProductsComponent.vue"
import WeddingsComponent from "../components/WeddingsComponent.vue"
import BakeryCarouselComponent from "../components/BakeryCarouselComponent.vue"

export default {
  components:{
    HeaderComponent,
    JumboComponent,
    OurProductsComponent,
    WeddingsComponent,
    BakeryCarouselComponent
}
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <JumboComponent></JumboComponent>
  <OurProductsComponent></OurProductsComponent>
  <WeddingsComponent></WeddingsComponent>
  <BakeryCarouselComponent></BakeryCarouselComponent>
</template>

<style lang="scss" scoped>
</style>