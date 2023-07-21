<template>
  <!-- html -->
  <h1 style="background-color: red;">Je suis Dr Love 🏍</h1>
  <HeaderComp></HeaderComp>
  <!-- <header-comp></header-comp> -->
</template>

<style>
/* CSS */
h1{
  text-align: left;
  margin-top: 1rem ;
  margin-left: 1rem;
  color:blue;
}


</style>

<script>
// JS
import HeaderComp from "./components/Header.vue";
export default {
  components: {HeaderComp}
}
</script>