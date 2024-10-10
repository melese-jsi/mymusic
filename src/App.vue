<template>
  <v-app>

     <v-container>
      <player-title-bar-vue></player-title-bar-vue>
      <player-playlist-panel-vue :playlist="playlist" :selectedTrack="selectedTrack" @selecttrack="selectTrack" @playtrack="play"></player-playlist-panel-vue>
       <player-controls-bars-vue  @playtrack="play" @pausetrack="pause" @stoptrack="stop" @skiptrack="skip" :loop="loop" @toggleloop="toggleLoop"></player-controls-bars-vue>
     </v-container>






  </v-app>
</template>

<script>
import PlayerControlsBarsVue from './components/PlayerControlsBars.vue'
import PlayerPlaylistPanelVue from './components/PlayerPlaylistPanel.vue'
import PlayerTitleBarVue from './components/PlayerTitleBar.vue'



  export default {
    data(){

        return{
          loop:false,
          index:0,
          selectedTrack : null,
          playlist: [
              {title: "kir alegne", artist: "Ephrem", howl: null, display: true},
              {title: "alehu ene", artist: "Ephrem", howl: null, display: true}
              ]
        }
    },
    components:{
      PlayerTitleBarVue,
      PlayerPlaylistPanelVue,
      PlayerControlsBarsVue
    },
    computed: {
  currentTrack () {
    return this.playlist[this.index]
  }
},
    methods:{
      toggleLoop(loop){
        this.loop = loop
      },

      skip (direction) {
  let index = 0
  if (direction === "next") {
    index = this.index + 1
    if (index >= this.playlist.length) {
      index = 0
    }
  } else {
    index = this.index - 1
    if (index < 0) {
      index = this.playlist.length - 1
    }
  }
  this.skipTo(index)
},
skipTo (index) {
  if (this.currentTrack) {
    this.currentTrack.howl.stop()
  }
  this.play(index)
},

      selectTrack (track) {
          this.selectedTrack = track
          console.log("you selected track ",this.selectedTrack.howl)

        },
        play (index) {
          console.log("playing ",index)

  let selectedTrackIndex = this.playlist.findIndex(track => track === this.selectedTrack)
  if (typeof index === 'number') {
    index = index
  } else if (this.selectedTrack) {
    if (this.selectedTrack != this.currentTrack) {
      this.stop()
    }
    index = selectedTrackIndex
  } else {
    index = this.index
  }
  let track = this.playlist[index].howl

  if (track.playing()) {
    return
  } else {
    track.play()
  }

  this.selectedTrack = this.playlist[index]
  this.playing = true
  this.index = index
},
pause () {
  console.log("heeeey")
  console.log(this.currentTrack.howl)
  console.log(this.currentTrack.howl)
  this.currentTrack.howl.pause()
  this.playing = false
},
stop () {
  this.currentTrack.howl.stop()
  this.playing = false
}
    },
<<<<<<< HEAD
    watch: {
  playing(playing) {
    this.seek = this.currentTrack.howl.seek()
    let updateSeek
    if (playing) {
      updateSeek = setInterval(() => {
        this.seek = this.currentTrack.howl.seek()
      }, 250)
    } else {
      clearInterval(updateSeek)
    }
  },
},
    data(){

      return{
        seek:0,
        playing:false,
        index:0,
        selectedTrack : null,
        playlist: [
            {title: "kir alegne", artist: "Ephrem", howl: null, display: true},
            {title: "alehu ene", artist: "Ephrem", howl: null, display: true}
            ]
      }
    },
=======
  
>>>>>>> f9e59e1a3310c7e29335956b4571491eee01d2cd

    created: function () {
  this.playlist.forEach( (track) => {
    let file = track.title.replace(/\s/g, "_")
    console.log(file)
    track.howl = new Howl({
      src: [`./playlist/${file}.mp3`],
      onend: () => {
        if (this.loop) {
          this.play(this.index)
        } else {
          this.skip('next')
        }   
     }
    })

  })
}
  }
</script>
