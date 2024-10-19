<template>
 <v-layout class="ovrflow-visible">
   <v-bottom-navigation mode="shift">
    <v-btn>
        <v-icon>mdi-television-play</v-icon>

        <span>Video</span>
      </v-btn>

      <v-btn>


        <RouterLink to="/app"><v-icon>mdi-music-note</v-icon></RouterLink>
        <span>Music</span>
      </v-btn>

      <v-btn>
        <v-icon>mdi-book</v-icon>

        <RouterLink to="/albumDetail">Book</RouterLink>
      </v-btn>

      <v-btn>
        <v-icon>mdi-image</v-icon>

        <span>Image</span>
      </v-btn>

   </v-bottom-navigation>
   <v-main>
      <RouterView/>
   </v-main>



 </v-layout>


</template>

<script>
export default {

}
</script>

<style>

</style>
