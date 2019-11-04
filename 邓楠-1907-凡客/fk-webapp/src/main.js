import Vue from 'vue'
import homepage from './homepage'

new Vue({
  el:"#app",
	render(h){
		return h(homepage)
	}
})
