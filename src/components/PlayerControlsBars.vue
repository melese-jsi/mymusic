<template>
  <div>
    <v-toolbar  height=90>
      <v-btn @click="toggleMute">
        <v-icon v-show="!muted" icon="mdi-volume-low"></v-icon>
        <v-icon v-show="muted" icon="mdi-volume-mute"></v-icon >
    </v-btn>
      <v-slider v-model="volume" @update:model-value="updateVolume(volume)" max="1" step="0.1"></v-slider>{{this.volume * 100 + '%'}}
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
      <v-btn flat icon @click="toggleLoop">
          <v-icon color="light-blue" v-if="loop" icon="mdi-repeat-once"></v-icon>
          <v-icon color="blue-grey" v-else icon="mdi-repeat"></v-icon>
      </v-btn>

    </v-toolbar>
    <v-toolbar elevation="8">
       <v-progress-linear bg-color="blue-grey"
       color="lime" height="10" striped clickable="true" model-value="trackProgress" @update:modelValue="updateSeek($event)" ></v-progress-linear>
    </v-toolbar>
  </div>
</template>
<script>


export default {
  created: function () {
  Howler.volume(this.volume)
},
props:{
   progress:Number,
   loop:Boolean
},
  data(){

   return{
    volume:0.5,
    muted:false
   }
  },
  computed:{
    trackProgress () {
      console.log("progress ",this.progress)
      return this.progress * 100
     }
  },
  methods: {
    toggleLoop () {
       this.$emit('toggleloop', !this.loop)
     },
    toggleMute()
    {
      this.muted = !this.muted
      Howler.mute(this.muted)
    },

    updateSeek (event) {
      console.log("we are seeking")
  let el = document.querySelector(".v-progress-linear"),
      mousePos = event,
      elWidth = el.clientWidth,
      percents = (mousePos / elWidth) * 100
      console.log("seeking",event,elWidth)
  this.$emit('updateseek', percents)
},

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
