<template>
    <section>
        <h3>your mixes</h3>
        <ul>
          <AudioPlayer v-for="mix in mixes.mixtables" :mixes="mixes" :loop="false" :mix="mix" :key="mix.DJ"></AudioPlayer>
        </ul>
    </section>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";

export default {
  components: {
    AudioPlayer
  },

  props: ["mixes", "submitMix", "mix"]
};
</script>

<style scoped>
h3 {
  margin-top: 3%;
  margin-left: 65%;
}
</style>
