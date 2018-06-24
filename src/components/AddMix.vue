<template>
    <form id="force-form" class="mix-form" :submitMix="submitMix" :mixes="mixes" v-on:submit.prevent="submitMix()">
        <label for="DJ">DJ Name</label>
        <input v-model="mix.DJ" type="text" name="DJ">
        <label for="Title">Mix Title</label>
        <input v-model="mix.Title" type="text" name="Title">
        <label for="Tags">Tags</label>
        <input v-model="mix.Tags" placeholder="Words separated by spaces. Be thorough!" type="text" name="Tags">
            <form enctype="multipart/formdata" id="uploadForm" @submit.prevent="uploadMix">
            <h2>{{this.post}}</h2>
            <label for="audio">Upload your mix here</label>
            <input type="file" name="audio" id="audio">
            <input class="s-page-button" type="submit" name="submit" id="submit" value="Upload File">
            </form>

        <!-- <loading-progress
        :progress="progress"
        rotationDuration="1"
        shape="M50,3l12,36h38l-30,22l11,36l-31-21l-31,21l11-36l-30-22h38z"
        size="100">
        </loading-progress> -->
        <label for="submit">once you click upload, sit tight and wait for the prompt</label>
        <input type="submit" id="submitButton" name="submit" value="Submit" />
    </form>
</template>

<script>
import VueProgress from "vue-progress";
export default {
  name: "AddMix",
  components: {
    VueProgress
  },
  props: ["addMix", "mixes"],
  data() {
    return {
      audioUrl: "",
      mix: {
        DJ: "",
        Title: "",
        Mixlink: "",
        Tags: "",
        Likes: 0
      },
      API_URL: "https://mixtap.herokuapp.com/mixes/"
    };
  },
  methods: {
    submitMix() {
      this.addMix(this.mix);
      this.postMix(this.mix);
      this.mix = {
        DJ: "",
        Title: "",
        Mixlink: "",
        Tags: "",
        Likes: 0
      };
    },
    postMix() {
      return fetch(this.API_URL, {
        headers: new Headers({ "Content-Type": "application/json" }),
        method: "POST",
        body: JSON.stringify(this.mix)
      }).then(response => response.json());
      this.mix.DJ = "";
      this.mix.Title = "";
      this.mix.Mixlink = "";
      this.mix.Tags = "";
      this.mix.Likes = 0;
      this.audioURL = "";
      console.log("i'm working");
    },
    uploadMix(event) {
      console.log(new FormData(event.target));
      event.stopPropagation();
      fetch("https://mixtap.herokuapp.com/upload", {
        method: "POST",
        body: new FormData(event.target),
        "Content-type": "multipart/form-data"
      })
        .then(response => response.json())
        .then(response => (this.mix.Mixlink = response.audioUrl))
        .then(() => alert("Mix Uploaded. Don't forget to submit it"));
    }
  }
};
</script>

<style>
.s-page-button {
  margin-top: 5px;
}

#force-form {
  margin-top: 1%;
}
.mix-form {
  font-weight: bold;
  margin: 5px;
  display: flex;
  flex-direction: column;
  margin-left: 14%;
  width: 45%;
}

#progress {
  display: block;
  width: 240px;
  padding: 2px 5px;
  margin: 2px 0;
  border: 1px inset #446;
  border-radius: 5px;
}
@media only screen and (max-width: 600px) {
  .mix-form {
    width: 80%;
  }
  #force-form {
    margin-left: 1%;
  }
}
</style>