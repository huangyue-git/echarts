<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item,index) in lunbolist">
				<img :src="item.adlist_img" :alt="item.adlist_id"/>
			</div>	
		</div>
		<div class="swiper-pagination"></div>
	</div>
</template>
	  
<script>
	import swiper from 'swiper/dist/js/swiper.js';
	import swipers from 'swiper/dist/css/swiper.min.css';
	// 引入axios
	import axios from 'axios';	
	export default {
	  name: 'lunbo1',
		data:function(){
			return {
				lunbolist:[]
			}
		},
		mounted:function(){
			//轮播图的初始化操作
			new Swiper('.swiper-container', {
			       pagination: {
						el: '.swiper-pagination',
						clickable:true,
					},
			       nextButton: '.swiper-button-next',
			       prevButton: '.swiper-button-prev',
			       paginationClickable: true,
			    observer: true,
			       spaceBetween: 30,
			       centeredSlides: true,
			       autoplay: 2500,
			       autoplayDisableOnInteraction: false
			   }),
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				console.log(data.data.data.top_ad.list);
				this.lunbolist = data.data.data.top_ad.list;
			})
		}
	}
</script>

<style scoped lang="scss">
	.swiper-container {width: 100%;height: 170px;}
	.swiper-container img{height:170px;width: 100%;}
</style>
