<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import JumboComponent from "../components/JumboComponent.vue"
import OurProductsComponent from "../components/OurProductsComponent.vue"
import WeddingsComponent from "../components/WeddingsComponent.vue"
import BakeryCarouselComponent from "../components/BakeryCarouselComponent.vue"
import ProcessesComponent from "../components/ProcessesComponent.vue"
import OrderPickComponent from "../components/OrderPickComponent.vue"
import VisitBakeryComponent from "../components/VisitBakeryComponent.vue"
import InTouchComponent from "../components/InTouchComponent.vue"

export default {
  components:{
    HeaderComponent,
    JumboComponent,
    OurProductsComponent,
    WeddingsComponent,
    BakeryCarouselComponent,
    ProcessesComponent,
    OrderPickComponent,
    InTouchComponent,
    VisitBakeryComponent
},
methods: {
  scrollToTop() {
    window.scrollTo(0,0);
  }
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
  <!--VisitBakeryComponent-->
  <VisitBakeryComponent></VisitBakeryComponent>
  <!--//VisitBakeryComponent-->
   <!--InTouchComponent-->
   <InTouchComponent></InTouchComponent>
  <!--//InTouchComponent-->
  <!--OrderPickComponent-->
  <OrderPickComponent></OrderPickComponent>
  <!--//OrderPickComponent-->
  <!--ScrollToTop-->
  <div class="scrolltop_button">
    <div @click="scrollToTop" class="scrolltop_element d_flex justify_center">
      <i class="fa-solid fa-chevron-up color_white"></i>
    </div>
  </div>
  <!--//ScrollToTop-->
</template>

<style lang="scss" scoped>
.scrolltop_element {
  background-color: black;
  padding: 15px;
  position: fixed;
  border-radius: 5px;
  margin-right: 25px;
  margin-bottom: 25px;
  right: 0;
  bottom: 0;
}

.scrolltop_element:hover {
  background-color: #bda2f3;
  transition: 0.4s;
  cursor: pointer;
  
}
</style>