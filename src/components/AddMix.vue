<template>
    <form class="mix-form" :submitMix="submitMix" :mixes="mixes" v-on:submit.prevent="submitMix()">
        <label for="DJ">DJ Name</label>
        <input v-model="mix.DJ" type="text" name="DJ">
        <label for="Title">Mix Title</label>
        <input v-model="mix.Title" type="text" name="Title">
        <label for="Tags">Tags</label>
        <input v-model="mix.Tags" type="text" name="Tags">
        <label for="File">File</label>
        <input v-model="mix.File" type="text" name="File">
        <input type="submit" id="submitButton" name="submit" value="Submit" />
    </form>
</template>

<script>
export default {
  name: "AddMix",
  props: ["addMix", "mixes"],
  data() {
    return {
      mix: {
        DJ: "",
        Title: "",
        File: "",
        Tags: ""
      },
      API_URL: "https://mixtap.herokuapp.com/mixes/"
    };
  },
  methods: {
    submitMix() {
      this.addMix(this.mix);
      this.postMix();
      this.mix = {
        DJ: "",
        Title: "",
        File: "",
        Tags: ""
      };
    },
    postMix() {
      return fetch(this.API_URL, {
        headers: {
          "content-type": "application/json",
          mode: "cors",
          cache: "default"
        },
        method: "POST",
        body: JSON.stringify(this.mix)
      });
    }
  }
};
</script>
