<template>
    <div>
        <h1 class="pp" src="partypeople.png">party people</h1>
        <nav class="nav">
         <div class="links one">
        <router-link class="link-text" to="/">Home</router-link> 
      </div>
      <div class="links two">
        <router-link class="link-text" to="/DJ">DJ</router-link> 
      </div>
        <div type="link" class="links link-text" @click.prevent="toggleForm">Search for Mixes</div>     
      </nav>
        <SearchMixes :favmixes="favmixes" :mixes="mixes" v-show="displaySearch" :getFavorites="getFavorites"/>
        <FavPlayerSection :favmixes="favmixes" :mixes="mixes" :getFavorites="getFavorites" ></FavPlayerSection>
    </div>
</template>
<script>
import FavAudioPlayer from "@/components/FavAudioPlayer.vue";
import SearchMixes from "@/components/SearchMixes.vue";
import FavPlayerSection from "@/components/FavPlayerSection.vue";
import SearchAudioPlayer from "@/components/SearchAudioPlayer.vue";

export default {
  name: "party-people",
  components: {
    FavAudioPlayer,
    FavPlayerSection,
    SearchMixes,
    SearchAudioPlayer
  },
  data() {
    return {
      displaySearch: false,
      mixData: [],
      favmixes: [],
      mixes: [],
      API_URL: "https://mixtap.herokuapp.com/mixes/",
      API_URL2: "https://mixtap.herokuapp.com/favmixes/"
    };
  },
  async mounted() {
    Promise.all([
      fetch(this.API_URL).then(res => res.json()),

      fetch(this.API_URL2).then(res => res.json())
    ]).then(res => {
      this.mixData = res;
      this.mixes = this.mixData[0].mixtables;
      this.favmixes = this.mixData[1].myFavMixes;
      console.log(this.mixes);
    });
  },
  methods: {
    toggleForm() {
      this.displaySearch = !this.displaySearch;
    },

    getFavorites() {
      return fetch(this.API_URL2)
        .then(response => response.json())
        .then(response => {
          this.favmixes = response.favmixes;
        });
    }
  }
};
</script>

<style>cod
.nav {
  position: relative;
  margin-bottom: 0;
}
.pp {
  font-family: "Mr Dafoe", cursive;
  font-size: 10vh;
  text-shadow: 3px 2px 2px #a2eaff;
  position: relative;
  margin-right: 3%;
  float: right;
}
</style>