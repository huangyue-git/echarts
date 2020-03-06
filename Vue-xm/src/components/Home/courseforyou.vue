<template>
	<div class="courseforyou">		
		<div class="h">为你精选</div>
		<div class="li">
			<div v-for="(item,index) in courseforyou" class="list">
				<div class="listli">
					<img :src="item.pro_img[0].url"  class="img"/>
					<span class="title">{{item.pro_name}}</span>
					<span class="join">{{item.pro_Joiner}}人已参加</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入axios
	import axios from 'axios';	
	export default {
	  name: 'courseforyou',
		data:function(){
			return {
				courseforyou:[]
			}
		},
		mounted:function(){
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				console.log(data);
				this.courseforyou = data.data.data.CourseforYou;
			})
		}
	}
</script>

<style scoped lang="scss">
	.courseforyou{
		width: 92%;height: 400px;margin: 10px 0;padding: 10px;
		.h{font-size: 20px;font-weight: 400;margin: 10px 0;}
		.li{
			display: flex;flex-direction: row;flex-wrap: wrap;
			.list{padding: 10px 0;display: flex;flex-direction: row;flex-wrap: nowrap;width: 50%;
				.listli{
					display: flex;flex-direction: column;flex-wrap: wrap;width: 50%;
					.img{height: 110px;width: 10.3125rem;border-radius: 10px;}
					.title{font-size: 17px;font-weight: bold;height: 22px;line-height: 22px;}
					.join{font-size: 12px;color: #999;}
					}
			}
		}
	}
	
</style>
