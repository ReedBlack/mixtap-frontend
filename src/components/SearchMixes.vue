<template>
    <form action="">
        <vue-fuse class="search-bar" :keys="keys" :list="mixes" event-name="mixesChanged" inputChangeEventName="mixSearchInputChanged" :default-all="defaultAllToggle" :search="termtwo" ></vue-fuse>
        <div id="list">
            <ul>
                <SearchAudioPlayer v-for="result in componentResults" :favmixes="favmixes" :result="result" :componentResults="componentResults" :key="result.id" :getFavorites="getFavorites" :favmix="favmix"></SearchAudioPlayer> 
            </ul>
        </div>
    </form>

</template>

<script>
import VueFuse from "vue-fuse";
import SearchAudioPlayer from "@/components/SearchAudioPlayer.vue";

export default {
  name: "SearchMixes",
  components: {
    VueFuse,
    SearchAudioPlayer
  },
  props: ["mixes", "getFavorites"],
  data() {
    return {
      term: "",
      termtwo: "",
      defaultAllToggle: false,
      componentResults: [],
      methodResults: [],
      keys: ["DJ", "Title", "Tags"],
      options: {
        keys: ["DJ", "Title", "Tags"]
      }
    };
  },
  methods: {
    toggle() {
      this.defaultAllToggle = !this.defaultAllToggle;
      this.$forceUpdate();
    }
  },
  watch: {
    term() {
      this.$search(this.term, this.mixes, this.options).then(results => {
        this.methodResults = results;
      });
    }
  },
  created() {
    this.$on("mixesChanged", results => {
      this.componentResults = results;
    });
  }
};
</script>

<style>
.search-bar {
  margin-left: 3%;
}
</style>