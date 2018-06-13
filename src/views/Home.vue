<template>
  <div class="home">
    <div class="main-section">
      <header class="home-logo">
        <img class="logo-text" src="mixtap.png">
        <img class="design" src="logo.png">
        <img id="spinner" class="sphere-one" src="bubble.png">
        <img id="white-ball" class="sphere-two" src="white-ball.png">
        
      </header>
      <main class="about">
        <h2>Welcome to Mixtap</h2>
        <h3>Your portal to new favorites and new fans</h3>
        <p></p>
      </main>
    </div>
    <nav class="nav">
      <div class="links one">
        <router-link class="link-text" to="/dj">DJ</router-link> 
      </div>
      <div class="links two">
        <router-link class="link-text" to="/partypeople">Party People</router-link> 
      </div>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .sphere-one {
    margin-right: -55%;
  }
  .home-logo {
    align-items: center !important;
  }

  .links {
    margin-top: -2px;
    background: url("/vapor.jpg");
    background-size: cover;
    margin: 4px;
  }

  .link-text {
    font-size: 5.5vw;
  }

  .logo-text {
    margin-left: 48px;
  }
}
.main-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.about {
  margin-right: 10%;
  color: #28014a;
  z-index: 70;
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

.home-logo {
  margin-top: -2%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 10;
  height: 100%;
  width: auto;
}
.logo-text {
  -webkit-filter: drop-shadow(5px 5px 4px #a2eaff);
  position: absolute;
  filter: drop-shadow(5px 5px 4px #a2eaff);
  z-index: 14;
  margin-left: 1%;
  margin-top: -3%;
  height: 100%;
  width: auto;
}

nav {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 50;
}

.links {
  padding: 4px;
  margin: 2%;
  text-align: center;
  height: 1%;
  width: 50%;
  font-size: 6vh;
  border-radius: 6px;
  bottom: 0px;

  -webkit-filter: drop-shadow(3px 3px 2px #d970dc);
  filter: drop-shadow(3px 3px 2px #d970dc);
}

.links:hover {
  margin-top: -px;
  background: url("/vapor.jpg");
  background-size: cover;
}

.link-text {
  display: block;
  padding-top: 1.4%;
  text-decoration: none;
  font-weight: bold;
}
.link-text:hover {
  margin-top: -10px;
  -webkit-filter: drop-shadow(3px 3px 2px grey);
  filter: drop-shadow(3px 3px 2px grey);
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