<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import JumboComponent from "../components/JumboComponent.vue"
import OurProductsComponent from "../components/OurProductsComponent.vue"
import WeddingsComponent from "../components/WeddingsComponent.vue"
import BakeryCarouselComponent from "../components/BakeryCarouselComponent.vue"
import ProcessesComponent from "./ProcessesComponent.vue"

export default {
  components:{
    HeaderComponent,
    JumboComponent,
    OurProductsComponent,
    WeddingsComponent,
    BakeryCarouselComponent,
    ProcessesComponent
}
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <JumboComponent></JumboComponent>
  <OurProductsComponent></OurProductsComponent>
  <WeddingsComponent></WeddingsComponent>
  <BakeryCarouselComponent></BakeryCarouselComponent>
  <ProcessesComponent></ProcessesComponent>
</template>

<style lang="scss" scoped>
</style>