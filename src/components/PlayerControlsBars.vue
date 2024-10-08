<template>
  <div>
    <v-toolbar  height=90>
      <v-spacer></v-spacer>

      <v-btn outline fab small color="light-blue" @click="stopTrack">
        <v-icon icon="mdi-stop"></v-icon>
      </v-btn>
      <v-btn outline fab color="light-blue" @click="playTrack()">
        <v-icon large icon="mdi-play"></v-icon>
      </v-btn>
      <v-btn outline fab small color="light-blue" @click="pauseTrack">
        <v-icon icon="mdi-pause"></v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>
<script>


export default {
  methods: {
  playTrack(index) {
    this.$emit('playtrack', index)
  },
  pauseTrack() {
    this.$emit('pausetrack')
  },
  stopTrack() {
    this.$emit('stoptrack')
  }
}
}
</script>
