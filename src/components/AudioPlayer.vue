
<template>
  <div>
    <li id="player" class="player">
      <div class="title-audio">
        <h1 class="dj-name">{{mix.DJ}}</h1>
        <h3 class="mix-title">{{mix.Title}}</h3>
        <audio class="audio-controls" :src="mix.Mixlink" controls></audio>
      </div> 
      <div class="title-dropdown">
        <b-dropdown id="ddown-sm" size="sm" class="m-5">
          <b-dropdown-item-button @click="deleteMix()">Delete</b-dropdown-item-button>
          <b-dropdown-item-button @click="likeMix()">Like Mix</b-dropdown-item-button>
          <b-dropdown-item-button>Be Groovy</b-dropdown-item-button>
        </b-dropdown>
        <small class="likes">likes: {{mix.Likes}}</small>
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
  name: "AudioPlayer",

  components: {
    VueProgress,
    BootstrapVue
  },
  props: ["submitMix", "mixtables", "mixes", "mix"],
  data() {
    return {
      Likes: 0,
      API_URL_DELETE: `https://mixtap.herokuapp.com/mixes/${this.mix.id}`
    };
  },
  methods: {
    deleteMix() {
      console.log(this.mix);
      return fetch(this.API_URL_DELETE, {
        method: "DELETE"
      }).then(() => this.mixes.mixtables.splice(this.mix, 1));
    },
    likeMix() {
      return fetch(this.API_URL_DELETE, {
        method: "put",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(this.mix)
      })
        .then(() => (this.mix.Likes += 1))
        .then(() => {});
    }
  }
};
</script>

<style>
.title-audio {
  display: flex;
  flex-direction: row;

  width: 65%;
}
.dj-name {
  padding-right: 25px;
  font-size: 4vh;
  width: 90%;
}

.likes {
  height: 25px;
}

.m-5 {
  margin-right: 0px;
  margin-bottom: 20px;
}

.mix-title {
  font-size: 3vh;
  margin-right: 10px;
  width: 100%;
}

.title-dropdown {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.player:hover,
.player:focus,
.player:active {
  -webkit-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  transform: scale(1.05);
}

.audio-controls {
  width: 100%;
  padding-bottom: 3px;
}
.player {
  display: flex;
  flex-direction: row;
  width: 90%;
  border: 2px solid gray;
  margin-top: -3%;
  margin-left: 2%;
  border-radius: 6px;
  padding: 1%;
  background: #fef6fe; /* Old browsers */
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
}

@media only screen and (max-width: 600px) {
  #player {
    width: 92%;
  }

  .audio-controls {
    width: 270px;
  }

  .likes {
    margin-left: -60px;
  }
}
</style>