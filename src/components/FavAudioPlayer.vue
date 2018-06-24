
<template>
  <div>
    <li id="favplayer" class="player" :favmixes="favmixes" :key="favmix.DJ">
      <div class="title-audio">
        <h1 class="dj-name">{{favmix.DJ}}</h1>
        <h3 class="mix-title">{{favmix.Title}}</h3>
        <audio class="audio-controls" :src="favmix.Mixlink" controls></audio>
      </div> 
      <div class="title-dropdown">
        <b-dropdown id="ddown-sm" size="sm" class="m-5">
          <b-dropdown-item-button @click="deleteMix">Remove From Favorites</b-dropdown-item-button>
          <b-dropdown-item-button @click="likeMix()">Like Mix</b-dropdown-item-button>
          <b-dropdown-item-button @click="heardMix()">Mark as Heard</b-dropdown-item-button>
        </b-dropdown>
          <small v-show="favmix.Heard" class="likes">heard</small>
      </div>
      
 
    <div>
        <!-- <loading-progress
        :progress="progress"
        rotationDuration="1"
        shape="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z"
        size="100">
        </loading-progress> -->
    </div>
   </li>
  </div>
</template> 
<script>
import BootstrapVue from "bootstrap-vue";
import VueProgress from "vue-progress-path";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "FavAudioPlayer",

  components: {
    VueProgress,
    BootstrapVue
  },
  props: ["myFavMixes", "mix", "getFavorites", "favmixes", "favmix"],
  data() {
    return {
      mix: {
        Likes: 0
      },
      favmix: {
        Heard: false
      },
      API_URL_FAV: `https://mixtap.herokuapp.com/favmixes/${this.favmix.id}`,
      API_URL_MIXES: `https://mixtap.herokuapp.com/mixes/${this.favmix.id}`
    };
  },
  methods: {
    deleteMix() {
      return fetch(this.API_URL_DELETE, {
        method: "DELETE"
      }).then(() => this.favmixes.splice(this.favmix, 1));
    },
    likeMix() {
      return fetch(this.API_URL_MIXES, {
        method: "put",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.favmix)
      })
        .then(() => (this.favmix.Likes += 1))
        .then(() => {});
    },

    heardMix() {
      return fetch(this.API_URL_FAV, {
        method: "put",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.favmix)
      })
        .then(() => (this.favmix.Heard = !this.favmix.Heard))
        .then(() => {});
    }
  }
};
</script>

<style>
#favplayer {
  background: #e4f5fc; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    hsla(198, 80%, 94%, 1) 11%,
    hsla(198, 83%, 86%, 1) 36%,
    hsla(197, 71%, 78%, 1) 66%,
    hsla(199, 84%, 55%, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    hsla(198, 80%, 94%, 1) 11%,
    hsla(198, 83%, 86%, 1) 36%,
    hsla(197, 71%, 78%, 1) 66%,
    hsla(199, 84%, 55%, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    hsla(198, 80%, 94%, 1) 11%,
    hsla(198, 83%, 86%, 1) 36%,
    hsla(197, 71%, 78%, 1) 66%,
    hsla(199, 84%, 55%, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2ab0ed',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

@media only screen and (max-width: 600px) {
  #favplayer {
    width: 94%;
  }
}
</style>