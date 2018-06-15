<template>
    <div>
        <img class="logo-dj" src="logo.png" alt="">
        <button type="button" @click.prevent="toggleForm">Add a mix</button> 
        <AddMix :addMix="addMix" :mixes="mixes" v-show="displayForm"/>
        <PlayerSection :mixes="mixes" :mix="mix"></PlayerSection>
    </div>
</template>

<script>
import AudioPlayer from "@/components/audio-player.vue";
import AddMix from "@/components/AddMix.vue";
import PlayerSection from "@/components/PlayerSection.vue";

export default {
  name: "dj",
  components: {
    AudioPlayer,
    PlayerSection,
    AddMix
  },
  data() {
    return {
      displayForm: false,
      mixes: [],
      API_URL: "https://mixtap.herokuapp.com/mixes/"
    };
  },
  methods: {
    addMix(mix) {
      console.log(this.mixes);
      this.mixes.mixtables.unshift(mix);
    },
    toggleForm() {
      this.displayForm = !this.displayForm;
    }
  },
  async mounted() {
    fetch(this.API_URL)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.mixes = res;
      });
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