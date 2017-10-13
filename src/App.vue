<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>

<template>
<div id="app">
	<img src="./assets/logo.png">
	<router-view></router-view>
	<<router-link :to="{ name: 'Hello', params: {} }">hello 组建</router-link>
		<<router-link :to="{ name: 't2', params: {} }">t2组建</router-link>
			<div id="app-in">
			</div>
			<h1>{{msg}}</h1>
</div>
</template>
 
<script>
export default {
	name: 'app',
	data() {
		return {
			msg: 'bkd的第一个vue项目,使用了router'
		}
	}
}
</script>
