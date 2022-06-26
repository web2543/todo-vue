<style scoped>
li{
  display: inline;
  padding: 10px;
}
</style>
<template>
<ul>
    <li ><router-link to="/home">home</router-link></li>
    <li><router-link to="/login">login</router-link></li>
    <li><router-link to="/signup">signup</router-link></li>
</ul>
    <router-view/>
</template>