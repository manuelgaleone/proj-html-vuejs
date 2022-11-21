<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import JumboComponent from "../components/JumboComponent.vue"
import OurProductsComponent from "../components/OurProductsComponent.vue"
import WeddingsComponent from "../components/WeddingsComponent.vue"

export default {
  components:{
    HeaderComponent,
    JumboComponent,
    OurProductsComponent,
    WeddingsComponent
  }
}
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <JumboComponent></JumboComponent>
  <OurProductsComponent></OurProductsComponent>
  <WeddingsComponent></WeddingsComponent>
</template>

<style lang="scss" scoped>
</style>