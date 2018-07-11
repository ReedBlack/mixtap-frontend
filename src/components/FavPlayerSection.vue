<template>
    <section>
        <h3>your favorites</h3>
        <ul>
          <FavAudioPlayer v-for="favmix in favmixes"  :favmix="favmix" :favmixes="favmixes" :key="favmix.id" :getFavorites="getFavorites"></FavAudioPlayer>
        </ul>
    </section>
</template>

<script>
import FavAudioPlayer from "@/components/FavAudioPlayer.vue";

export default {
  components: {
    FavAudioPlayer
  },

  props: ["favmixes", "submitMix", "getFavorites", "favmix"]
};
</script>

<style scoped>
h3 {
  margin-top: 4%;
  margin-left: 50%;
}
</style>
