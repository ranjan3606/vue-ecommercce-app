<template>
  <v-app>
    <navbar />
      <router-view/>
  </v-app>
</template>

<script>
import Navbar from "@/layouts/navbar/Navbar.vue";
export default {
    name: "App",
    data: () => ({}),
    components: { Navbar }
}
</script>
