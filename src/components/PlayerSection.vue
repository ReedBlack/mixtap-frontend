<template>
    <section>
        <h1>your mixes</h1>
        <ul>
          <audio-player v-for="mix in mixes.mixtables" :sources="audioSources" :loop="false" :mix="mix" :key="mix.DJ"></audio-player>
        </ul>
    </section>
</template>

<script>
import AudioPlayer from "@/components/audio-player.vue";

export default {
  components: {
    AudioPlayer
  },
  data() {
    return {
      audioSources: ["/testfile.mp3"]
    };
  },

  props: ["mixes", "submitMix", "mix"]
};
</script>
