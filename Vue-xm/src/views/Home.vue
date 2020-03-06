<template>
	<div>
		<div class="header">
			<span>厦门</span>
			<input type="text" placeholder="输入搜索关键词"/>
		</div>
		<!--首页轮播图 -->
		<lunbo1></lunbo1>
		<iconlist></iconlist>
		<courseforyou></courseforyou>
		<div id="list">
			<h2>本周最受欢迎TOP5</h2>
			<ul class="listul">
				<li v-for="(item,index) in list">
					<router-link :to="'/itemlist/'+item.pro_id">
						<div class="listli">
							<div class="left" v-if="item.pro_img !== undefined">
								<img :src="item.pro_img[0].url"/>
							</div>
							<div class="right" v-if="item.pro_Joiner !== undefined">
								<span>{{item.pro_name}}</span>
								<span>{{item.pro_Joiner}}人已参加</span>
							</div>
						</div>
					</router-link>						
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// 引入axios
import axios from 'axios';
// @ is an alias to /src
import lunbo1 from '@/components/Home/lunbo1.vue'
import iconlist from '@/components/Home/iconlist.vue'
import courseforyou from '@/components/Home/courseforyou.vue'
export default {
  name: 'Home',
  data:function(){
	  return {
		  list:[],
		  lunbolist:[]
	  }
  },
  components:{lunbo1,iconlist,courseforyou},
  mounted:function(){
	  //轮播图的初始化操作
	  new Swiper('.swiper-container', {
	         pagination: '.swiper-pagination',
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
	  axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((res)=>{
	  	console.log(res.data.data.top_ad.list);
	  	this.lunbolist = res.data.data.top_ad.list;
		this.list = res.data.data.CourseTop5;
	  })
  }
}
</script>

<style scoped="scoped" lang="scss">
	ul,li{list-style: none;}
	#list{background-color: #004b9e;padding: 10px;height: 100%;border-radius: 10px;width: 325px;margin-left: 10px;}
	#list h2{color: white;font-weight: 400;padding-top: 10px;padding-bottom: 10px;}
	.listli{padding:11px 15px;display: flex;flex-direction: row;flex-wrap: nowrap;}
	.listli .left{width: 35%;margin-right: -25px;}
	.listli .right{width: 65%;display: flex;flex-direction: column;padding-top: 16px}
	.listli .right span:nth-of-type(1){color: #000;font-size: 18px;}
	.listli .right span:nth-of-type(2){color: #999;font-size: 12px;margin-top: 3px;}
	.listli .left img{width: 75px;height: 75px;border-radius: 6px;}
	#list .listul{background-color: white;}
	#list .listul li{border-bottom: 1px solid #ddd;}
	.header{
			height: 44px;background-color: #004b9e;line-height: 44px;
			span{color: white;font-size: 14px;margin: 10px;}
			input{height: 30px;padding: 0 10px;font-size: 14px;border-radius: 10px;width: 230px;margin-left: 10px;}
			}
</style>
