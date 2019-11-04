<template>
  <div id="app">
		<yh-homepage-header></yh-homepage-header>
		<yh-homepage-shop></yh-homepage-shop>
		<yh-homepage-footer></yh-homepage-footer>
	</div>
</template>

<script>
		import header from "components/homepage/header.vue"
		import footer from "components/homepage/footer.vue"
		import shop 	from "components/homepage/shop.vue"
		
		export default{
			name:"homepage",
			components:{
				"yh-homepage-header":header,
				"yh-homepage-footer":footer,
				"yh-homepage-shop":shop
			}
		}
</script>

<style>

</style>
