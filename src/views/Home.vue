<template>

  <div class="home">
     <video loop muted autoplay class="fullscreen-bg__video">
       
        <source src="Person Playing a Music.mp4" type="video/mp4">
    
    </video>
    <div class="div-over-vid"></div>
    <div class="main-section">
      <header class="home-logo">
        <h1 class="logo-text" src="mixtap.png">mixtap</h1>
    
        
      </header>
      <nav class="nav">
        <div class="links one">
          <router-link id="dj-link" class="link-text" to="/dj">DJ</router-link> 
        </div>
        <div class="links two">
          <router-link class="link-text" to="/partypeople">Party People</router-link> 
        </div>
      </nav>
      <main class="about">
        <h2>Welcome to Mixtap</h2>
        <h3>Your portal to new favorites and new fans</h3>

        <p>Providing DJ's with unfiltered access to fans across the globe based on targeted genres, not popularity. For music fans, be prepared to find exposure to mixes and new music from sources you otherwise would have never found.</p>

        <h5>DJs -</h5>
        <p>Get exposure to your mixes based solely on finding the right audience. Music doesn't always need to be a popularity contest. Sure, usrs can "like" your mixes, but only you can see those likes for feedback purposes. When posting mixes, make sure you offer plenty of tags - tag the appropriate genres, settings, and artists associated with your mix so that it can be dynamically searched for among users seeking that good shit.</p>
        <h5>Party People -</h5>
        <p>Play around with how you type in your searches. Try unique combinations of moods, genres, and artists to find a mix tailored to you.</p>
      </main>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style>
.div-over-vid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: -moz-linear-gradient(
    -45deg,
    hsla(96, 45%, 98%, 1) 0%,
    hsla(100, 50%, 98%, 1) 13%,
    hsla(87, 43%, 96%, 0.39) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    hsla(96, 45%, 98%, 1) 0%,
    hsla(100, 50%, 98%, 1) 13%,
    hsla(87, 43%, 96%, 0.39) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    hsla(96, 45%, 98%, 1) 0%,
    hsla(100, 50%, 98%, 1) 13%,
    hsla(87, 43%, 96%, 0.39) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9fcf7', endColorstr='#63f5f9f0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}
.fullscreen-bg {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  z-index: -100;
}

.fullscreen-bg__video {
  position: absolute;
  background-size: contain;
  top: 0;
  left: 0;
  z-index: -100;
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.about {
  margin-top: 2.5%;
  color: #28014a;
  padding: 2%;
  border-radius: 5px;
  margin-left: 9%;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}
@media only screen and (max-width: 600px) {
  .logo-text {
    margin-left: 64%;
  }

  .about {
    width: 90%;
    margin-left: 3%;
  }
}
.home {
  display: flex;
  flex-direction: column;
}

.design {
  position: absolute;
  padding: 0;
  height: 100%;
  width: auto;
  margin-left: -3%;
  margin-top: -3%;
}
#white-ball {
  position: absolute;
  padding: 0;
  height: 13%;
  width: auto;
  margin-left: 12.5%;
  margin-top: 8.5%;
  z-index: 12;
  -webkit-filter: drop-shadow(-2px 3px 4px gray);
  filter: drop-shadow(-2px 3px 4px gray);
}

.logo-text {
  font-size: 12vh;
  font-family: "Mr Dafoe", cursive;
  position: relative;
  text-shadow: 3px 2px 2px #a2eaff;
  float: right;
  margin-right: 10%;
}

nav {
  color: #007bff;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 2%;
}

@keyframes rot {
  from {
    transform: rotate(0deg) translate(-150px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translate(-150px) rotate(-360deg);
  }
}

.sphere-one {
  width: 65px;
  height: 65px;
  position: absolute;
  top: 200px;
  left: 25%;
  margin: -40px;
  animation: rot 37s infinite linear;
  -webkit-filter: drop-shadow(-2px 3px 4px silver);
  filter: drop-shadow(-2px 3px 4px silver);
}
</style>