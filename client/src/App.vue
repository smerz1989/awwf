<template>
  <div id="nav" class="flex-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/chat">Chat</router-link>
  </div>
  <router-view/>
</template>

<style>
.flex-container {
  display: flex;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  color:whitesmoke;
}

.flex-nav {
    display: flex;
    justify-content: center;
}

.flex-container > .div {
  text-align: center;
  height: 100%;
  background-color: #062F4F;
}
</style>