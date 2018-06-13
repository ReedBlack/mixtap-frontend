
<template>
  <div class="player">
    <div>
      <h1>Yeah Right</h1>
      <h2>Vince Staples- test track</h2>
      <span>Total duration: {{ (duration / 60).toFixed(2) }} minutes </span>
      <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
      <button @click="stop">Stop</button>
    </div>
   <div>
      <loading-progress
      :progress="progress"
      rotationDuration="1"
      shape="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z"
      size="100">
      </loading-progress>
   </div>
  </div>
</template> 
<script>
import VueProgress from "vue-progress-path";
import VueHowler from "vue-howler";

export default {
  name: "audio-player",
  mixins: [VueHowler],
  components: {
    VueProgress,
    VueHowler
  },
  data() {
    return {
      fill: { gradient: ["red", "green", "blue"] }
    };
  },
  methods: {
    progress(event, progress, stepValue) {
      console.log(stepValue);
    },
    progress_end(event) {
      console.log("Circle progress end");
    }
  }
};
</script>

<style>
.vue-progress-path path {
  stroke-width: 8;
}

.vue-progress-path .progress {
  stroke: hotpink;
}

.vue-progress-path .background {
  stroke: #edd;
}

.player {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid gray;
  margin-top: -3%;
  border-radius: 5px;
  padding: 1%;
  width: 78%;
  margin-left: 10px;
  margin-bottom: 30%;
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
}
</style>