<template>
  <div id="app">
    <nav>

      <router-link to="/">หน้าเเรก</router-link> |
      <router-link to="/table">ตารางเเข่ง</router-link> |
      <router-link to="/team">ข้อมูลทีมเเข่ง</router-link> |
      <router-link to="/rule">กฏการเเข่ง</router-link> |
      <router-link to="/scrim">หาทีมซ้อม</router-link>
    </nav>
    <router-view />
    <notifications-list />
  </div>
</template>

<script>

export default {
  components:{
    
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

body {
  margin: 0%;
  
  font-family: 'MONOCROME', sans-serif;
  height: 100%;
  
  background-repeat: no-repeat;
  background-size: cover;
}


nav {
  background-image: linear-gradient(90deg, #5ED1E1, #E8BDDB);
  width: 100%;
  padding: 15px 0px;
  align-items: center;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 0px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 15px;
  color: black;
  font-size: 20px;
  transition: all 0.3s ease-out;
  font-family: 'Noto Sans Thai', sans-serif;
}

nav a:hover {
  color: white;
}

nav a.router-link-exact-active {
  color: #00FF00;
  border-bottom: 1px solid #00FF00;
}
</style>
