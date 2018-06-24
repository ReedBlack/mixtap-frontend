
<template>
  <div>
    <li id="search-player" class="player" :mixes="mixes" :key="result.DJ">
      <div class="title-audio">
        <h1 class="dj-name">{{result.DJ}}</h1>
        <h3 class="mix-title">{{result.Title}}</h3>
        <audio class="audio-controls" :src="result.Mixlink" controls></audio>
      </div> 
      <div class="title-dropdown">
        <b-dropdown id="ddown-sm" size="sm" class="m-5">
          <b-dropdown-item-button @click="addFav()">Add to Favorites</b-dropdown-item-button>
          <b-dropdown-item-button @click="likeMix()">Like Mix</b-dropdown-item-button>
          <b-dropdown-item-button>Be Groovy</b-dropdown-item-button>
        </b-dropdown>
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
import VueFuse from "vue-fuse";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "SearchAudioPlayer",
  components: {
    BootstrapVue,
    VueFuse
  },
  props: [
    "favmixes",
    "componentResults",
    "mixes",
    "mixtables",
    "result",
    "mix",
    "getFavorites",
    "favmix"
  ],
  data() {
    return {
      mix: {
        Likes: 0
      },
      API_URL: "https://mixtap.herokuapp.com/favmixes/",
      API_URL_DELETE: `https://mixtap.herokuapp.com/mixes/${this.result.id}`
    };
  },
  methods: {
    addFav() {
      return fetch(this.API_URL, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: "POST",
        body: JSON.stringify(this.result)
      }).then(response => response.json());
      this.mix.DJ = "";
      this.mix.Title = "";
      this.mix.Mixlink = "";
      this.mix.Tags = "";
      this.mix.Likes = 0;
      this.audioURL = "";
      this.favmixes.unshift(this.result);
    },
    likeMix() {
      return fetch(this.API_URL_DELETE, {
        method: "put",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.result)
      })
        .then(() => (this.result.Likes += 1))
        .then(() => {});
    }
  }
};
</script>

<style>
#search-player {
  background: -moz-linear-gradient(
    -45deg,
    hsla(164, 79%, 58%, 0.19) 5%,
    hsla(164, 79%, 58%, 0.19) 17%,
    hsla(164, 79%, 58%, 0.19) 30%,
    hsla(164, 79%, 58%, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    hsla(164, 79%, 58%, 0.19) 5%,
    hsla(164, 79%, 58%, 0.19) 17%,
    hsla(164, 79%, 58%, 0.19) 30%,
    hsla(164, 79%, 58%, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    hsla(164, 79%, 58%, 0.19) 5%,
    hsla(164, 79%, 58%, 0.19) 17%,
    hsla(164, 79%, 58%, 0.19) 30%,
    hsla(164, 79%, 58%, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#303ee8bb', endColorstr='#3ee8bb',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.title-audio {
  display: flex;
  flex-direction: column;
}

.dj-name {
  padding-right: 25px;
}

.player {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid gray;
  margin-top: -3%;
  border-radius: 6px;
  padding: 1%;
  margin: 30px;
  margin-bottom: -15px;
  background: #fef6fe; /* Old br
  owsers */
  background: -moz-linear-gradient(
    -45deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    hsla(300, 80%, 98%, 1) 4%,
    hsla(318, 89%, 93%, 1) 57%,
    hsla(320, 96%, 90%, 1) 78%,
    hsla(318, 100%, 89%, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fef6fe', endColorstr='#ffc9ef',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  -webkit-transition: all 0.11s linear;
  -moz-transition: all 0.11s linear;
  -o-transition: all 0.11s linear;
  transition: all 0.11s linear;
  -moz-box-shadow: 2px 2px 4px 0px #006773;
  -webkit-box-shadow: 2px 2px 4px 0px #006773;
  box-shadow: 2px 2px 4px 0px #006773;
  -moz-border-radius: 7px 7px 7px 7px;
  -webkit-border-radius: 7px 7px 7px 7px;
  border-radius: 7px 7px 7px 7px;
}

@media only screen and (max-width: 600px) {
  #search-player {
    width: 94%;
  }

  .audio-controls {
    width: 290px;
  }

  .likes {
    margin-left: -60px;
  }
}
</style>