<template>
    <v-card height="330">
      <v-list>
        <v-list-item
          v-for="(track, index) in playlist"
          :key="track.title"
          v-show="track.display">
          <v-list-item-title @click="selectTrack(track)" @dblclick="playTrack(index)">
            {{ index  }} {{ track.artist }} - {{ track.title }}
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
  console.log(index)
}
},
      computed:{
        getDuration(dur){
          return "xx"
        }
      },
      props: {
        playlist: Array,
        selectedTrack: Object
      }
    }
  </script>
