<template>
    <div>
        <img class="logo-dj" src="logo.png" alt="">
        <audio-player :sources="audioSources" :loop="false"></audio-player>
    </div>
</template>

<script>
import AudioPlayer from "@/components/audio-player.vue";

export default {
  name: "dj",
  components: {
    AudioPlayer
  },
  data() {
    return {
      audioSources: ["/testfile.mp3"]
    };
  }
};
</script>

<style>
.logo-dj {
  position: relative;
  z-index: -1;
  margin-top: -15%;
  margin-left: -15%;
}
</style>