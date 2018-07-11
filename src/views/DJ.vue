<template>
    <div>
      <header>
        <h1 class="dj">dj</h1>
      </header>
      <nav class="nav">
        <div class="links one">
          <router-link class="link-text" to="/">Home</router-link> 
        </div>
        <div class="links two">
          <router-link class="link-text" to="/partypeople">Party People</router-link> 
        </div>
          <a class="link-text" @click.prevent="toggleForm">Add a Mix</a> 
        <div class="add-mix-section">
          <AddMix class="mixform" :addMix="addMix" :mixes="mixes" v-show="displayForm"/>
        </div>
      </nav>
        <PlayerSection :mixes="mixes" ></PlayerSection>
    </div>
</template>

<script>
import AudioPlayer from "@/components/AudioPlayer.vue";
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
  },
  
};
</script>

<style>
.add-mix {
  width: 90px;
}
.mixform {
  margin-top: -15%;
  margin-left: 25%;
}

.dj {
  font-family: "Mr Dafoe", cursive;
  font-size: 14vh;
  text-shadow: 3px 2px 2px hsl(318, 100%, 89%);
  position: relative;
  float: right;
  margin-right: 10%;
}
@media only screen and (max-width: 600px) {
  .add-mix-section {
    margin-top: 15%;
  }
}
</style>