<template>
  <v-card height="60">
    <v-card-title>
      <h2>{{ trackInfo.artist }} - {{ trackInfo.title }} - {{getDuration}}</h2>
      <v-spacer></v-spacer>
      <h3>{{trackInfo.seek }}/{{getDuration}}</h3>
    </v-card-title>
  </v-card>
</template>
<script>
  const formattedTime = (second)=> new Date(second * 1000).toISOString().substr(11, 8);
  export default {

    computed:{
       getDuration(){
        return formattedTime(this.trackInfo.duration)
       }
    },
    props: {
      trackInfo: Object
    },
  }
</script>
