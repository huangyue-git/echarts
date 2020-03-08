<template>
	<div class="swiper-container" height="height">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in swiperArr" :key="index">
				<img v-if="type == 'home'" :src="item.adlist_img"  :alt="item.adtitle" height="height"/>
				<img v-else :src="item.url"  :alt="item.adtitle" height="height"/>
			</div>	
		</div>
		<div class="swiper-pagination"></div>
		<!-- <div class="swiper-button-prev" v-if="type == 'itemlist'"></div> -->
		<!-- <div class="swiper-button-next" v-if="type == 'itemlist'"></div> -->
	</div>	
</template>
	  
<script>
    //引入swiper
	import Swiper from 'swiper';
	//引入swiper的css
	import 'swiper/dist/css/swiper.css';
	// 引入axios
	import axios from 'axios';	
	export default {
		name: 'myswiper',
		props:['swiperArr','type','height'],
		mounted:function(){
			var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    autoplay:2000,
			    speed:1000,
			    observer:true,//处理异步数据
			    observeParents:true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			  })   
		}
	}
</script>

<style scoped lang="scss">
	*{padding: 0;margin: 0;}
	.swiper-container {width: 100%;height: height;}
	.swiper-container img{width: 100%;height: height;}
</style>
