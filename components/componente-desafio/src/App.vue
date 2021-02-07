<template>
  <v-app>
    <app-navigation />
    <app-bar />
    <app-content />
    <app-footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/template/AppBar";
import Navigation from "@/components/template/Navigation";
import Footer from "@/components/template/Footer";
import Content from "@/components/widgets/Content";

export default {
  components: {
    "app-bar": AppBar,
    "app-navigation": Navigation,
    "app-footer": Footer,
    "app-content": Content,
  },
};
</script>
