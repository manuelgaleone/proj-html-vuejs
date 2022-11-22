<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import JumboComponent from "../components/JumboComponent.vue"
import OurProductsComponent from "../components/OurProductsComponent.vue"
import WeddingsComponent from "../components/WeddingsComponent.vue"
import BakeryCarouselComponent from "../components/BakeryCarouselComponent.vue"
import ProcessesComponent from "../components/ProcessesComponent.vue"
import OrderPickComponent from "../components/OrderPickComponent.vue"

export default {
  components:{
    HeaderComponent,
    JumboComponent,
    OurProductsComponent,
    WeddingsComponent,
    BakeryCarouselComponent,
    ProcessesComponent,
    OrderPickComponent
}
}
</script>

<template>
  <!--JumboContent-->
  <JumboComponent></JumboComponent>
  <!--//JumboContent-->
  <!--OurProductsContent-->
  <OurProductsComponent></OurProductsComponent>
  <!--//OurProductsContent-->
  <!--CorporateWeddings-->
  <WeddingsComponent></WeddingsComponent>
  <!--//CorporateWeddings-->
  <!--LongCarousel-->
  <BakeryCarouselComponent></BakeryCarouselComponent>
  <!--//LongCarousel-->
  <!--GridProcesses-->
  <ProcessesComponent></ProcessesComponent>
  <!--//GridProcesses-->
  <!--OrderPickComponent-->
  <OrderPickComponent></OrderPickComponent>
  <!--//OrderPickComponent-->
</template>

<style lang="scss" scoped>
</style>