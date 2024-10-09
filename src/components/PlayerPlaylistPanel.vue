<template>
    <v-card height="330">
      <v-list>
        <v-list-item
          v-for="(track, index) in playlist"
          :key="track.title"
          v-show="track.display">
          <v-list-item-title @click="selectTrack(track)" @dblclick="playTrack(index)">
            {{ index  }} {{ track.artist }} - {{ track.title }} --- {{ calcLengthOfSong(track)}}
          </v-list-item-title>
          <v-spacer></v-spacer>
          <!-- {{ track.howl.duration() }} -->
        </v-list-item>
      </v-list>
    </v-card>
  </template>
  <script>
    export default {
      methods: {
  selectTrack (track) {
    this.$emit('selecttrack', track)

  },
  playTrack(index) {

  this.$emit('playtrack', index)

},
calcLengthOfSong(track){
          let min = Math.floor(track.howl.duration()/60)
          let extra = Math.floor(track.howl.duration()%60)
          min = min <10? "0"+min:min
          extra = extra <10? "0"+extra:extra
          return min +":"+extra
        }

},

      props: {
        playlist: Array,
        selectedTrack: Object
      }
    }
  </script>
