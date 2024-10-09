<template>
  <div>
    <v-toolbar  height=90>
      <v-slider v-model="volume" @input="updateVolume(volume)" max="1" step="0.1"></v-slider>{{this.volume * 100 + '%'}}
      <v-spacer></v-spacer>
      <v-btn outline fab small color="light-blue" @click="skipTrack('prev')">
        <v-icon icon="mdi-skip-previous-circle"></v-icon>
      </v-btn>


      <v-btn outline fab small color="light-blue" @click="stopTrack">
        <v-icon icon="mdi-stop"></v-icon>
      </v-btn>
      <v-btn outline fab color="light-blue" @click="playTrack()">
        <v-icon large icon="mdi-play"></v-icon>
      </v-btn>
      <v-btn outline fab small color="light-blue" @click="pauseTrack">
        <v-icon icon="mdi-pause"></v-icon>
      </v-btn>
      <!-- stop, play, and pause buttons are here -->
      <v-btn outline fab small color="light-blue" @click="skipTrack('next')">
        <v-icon icon="mdi-skip-next-circle"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>
<script>


export default {
  created: function () {
  Howler.volume(this.volume)
},
  data(){
   return{
    volume:0.5
   }
  },
  methods: {
    updateVolume (volume) {
        Howler.volume(volume)
},
  playTrack(index) {
    this.$emit('playtrack', index)
  },
  pauseTrack() {
    this.$emit('pausetrack')
  },
  stopTrack() {
    this.$emit('stoptrack')
  },
  skipTrack (direction) {
    this.$emit('skiptrack', direction)
   }
}
}
</script>
