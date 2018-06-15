<template>
    <form class="mix-form" :submitMix="submitMix" :mixes="mixes" v-on:submit.prevent="submitMix()">
        <label for="DJ">DJ Name</label>
        <input v-model="mix.DJ" type="text" name="DJ">
        <label for="Title">Mix Title</label>
        <input v-model="mix.Title" type="text" name="Title">
        <label for="Tags">Tags</label>
        <input v-model="mix.Tags" type="text" name="Tags">
        <label for="upload">upload your mix</label>
        <input type="file" name="upload" @change="onFileSelected"> 
        <button @click="uploadMix">Upload</button>
        <input type="submit" id="submitButton" name="submit" value="Submit" />
    </form>
</template>

<script>
import axios from "axios";
export default {
  name: "AddMix",
  props: ["addMix", "mixes"],
  data() {
    return {
      audioBlob: undefined,
      audioUrl: "",
      mix: {
        DJ: "",
        Title: "",
        Mixlink: "",
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
        Mixlink: "",
        Tags: ""
      };
    },
    postMix() {
      return fetch(this.API_URL, {
        headers: {
          "content-type": "application/json",
          mode: "cors"
        },
        method: "POST",
        body: JSON.stringify(this.mix)
      });
    },
    onFileSelected(event) {
      this.Mixlink = event.target.files[0];
    },
    uploadMix(event) {
      event.stopPropagation();
      fetch("https://mixtap.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "audio/mpeg"
      })
        .then(response => response.json())
        .then(response => (this.submission.Mixlink = response.audioUrl))
        .then(() => alert("Mix Uploaded. Don't forget to submit it"));
    },
    uploadR(event) {
      event.stopPropagation();
      let formData = new FormData();
      formData.append("audio", this.audioBlob);
      fetch("https://mixtap.herokuapp.com/upload", {
        method: "POST",
        body: formData,
        "Content-type": "audio/mpeg"
      })
        .then(response => response.json())
        .then(response => (this.submission.Mixlink = response.audioUrl))
        .then(() => alert("Mix Uploaded. Don't forget to submit it"));
    }
  }
};
</script>
