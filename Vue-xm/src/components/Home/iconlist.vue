<template>
		<div class="iconL">
			<div class="list">
				<div v-for="(item,index) in iconlist">
					<!-- <img :src="item.appUrl" /> -->
					<div></div>
					<span>{{item.CategoryName}}</span>
				</div>
			</div>
		</div>
</template>

<script>
	// 引入axios
	import axios from 'axios';	
	export default {
	  name: 'iconlist',
		data:function(){
			return {
				iconlist:[]
			}
		},
		mounted:function(){
			//获取数据
			axios.post("https://www.jvhv.com/siteindex.php/Index/Index.html").then((data)=>{
				console.log(data);
				this.iconlist = data.data.data.iconList;
			})
		}
	}
</script>

<style scoped lang="scss">
	.iconL{
		width: 92%;height: 176px;margin: 10px 0;padding: 10px;
		.list {
			display: flex;flex-direction: row;flex-wrap: wrap;
			div{width: 20%;padding: 10px 0;height: 63px;
				span{text-align: center;width: 100%;padding-left: 16px;}
				div{height: 38px;}
			}
		}
		
	}
</style>
