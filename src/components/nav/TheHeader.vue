<template>
  <div>
    <header>
      <nav>
        <div class="left">
          <img src="../../assets/y18.gif" alt="Hckrnews" />
          <router-link to="/news"><strong>Hacker News</strong></router-link>
          <!-- <router-link to="/newest">new</router-link> |
          <router-link to="/front">past</router-link> |
          <router-link to="/comments">comments</router-link> |
          <router-link to="/ask">ask</router-link> |
          <router-link to="/show">show</router-link> |
          <router-link to="/jobs">jobs</router-link> |
          <router-link to="/submit">submit</router-link> -->
        </div>
        <div class="right">
          <router-link to="/login">login</router-link> | 
          <a href="https://github.com/malikkotb/hckrnews">Source</a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* nav a.router-link-exact-active {
  color: #42b983;
} */

nav img {
  border:1px white solid;
  padding: 1px 1px;
  margin-right: 5px;
  float: left; /* make it align with text */
}

nav {
  padding: 5px;
  background-color: #ff6600;
  overflow: hidden;
  height: auto;
}
nav .left {
  float: left;
  color: #f2f2f2;
  text-align: left;
}
nav .right {
  float: right;
  color: #f2f2f2;
  text-align: right;
}
nav a {
  text-decoration: none;
  display: inline-block;
  color: #f2f2f2;
  /* color: #2c3e50; */
  text-align: center;
}
nav a:hover {
  opacity: 0.8;
}
</style>
