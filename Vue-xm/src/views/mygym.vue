<template>
	<div id="mygym">
		<myswiper :swiperArr='swiperArr' type="itemlist" height='233px'></myswiper>
		<div class="top">
			<h3>{{gymlist.gym_name}}</h3>
			<div class="hh">
				<span>{{gymlist.gym_business}}</span><br />
				<span>面积{{gymlist.gym_store_size}}㎡，可容纳{{gymlist.gym_capqty}}人,操房{{gymlist.gym_roomqty}}个,WiFi</span>
			</div>
			<div class="next">＞</div>
			<div class="address">
				<div>{{gymlist.gym_address}}</div>
				<div>{{gymlist.gym_distance}}</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	//引入 axios
	import axios from 'axios';
	 import myswiper from '@/components/Home/myswiper.vue'
	export default{
		name:"mygym",
		data:function(){
			return {
				gymlist:{},//接收内容页的对象
				swiperArr:[]
			}
		},
		watch:{
			'$route'(to,from){}
		},
		components:{myswiper},
		mounted:function(){
			var pid = parseInt(this.$route.params.gymid);
			let params = new URLSearchParams();
			params.append('gym_id',pid);
			params.append('fid','')
			axios.post("https://www.jvhv.com/siteindex.php/Gym/Detail.html",params
			).then((res)=>{
				console.log(res.data.data);
				this.gymlist = res.data.data;
				this.swiperArr = this.gymlist.gym_img; 
			})			   
		 }
		}
</script>

<style lang="scss">
	#main{background-color: white;}
	#mygym{
		width: 100%;background-color: #eee;
		.top{
			margin-top: 10px;padding: 10px;background-color: white;
			h3{font-size: 20px;font-weight: bold;}
			.hh{
				margin-top: 15px;margin-left: 25px;
				span:nth-of-type(1){font-size: 17px;height: 24px;line-height: 24px;margin: 10px 0;}
				span:nth-of-type(2){font-size: 12px;color: #999;height: 24px;line-height: 24px;}
			}
			.next{position: fixed;right: 15px;top: 305px;font-size: 20px;}
			.address{
				width: 100%;display: flex;flex-direction: row;flex-wrap: nowrap;margin: 15px 0;
				div:nth-of-type(1){width: 60%;font-size: 17px;padding-left: 10%px;}
				div:nth-of-type(2){width: 16%;font-size: 14px;padding-left: 14%;}
			}
		}
	}
</style>
