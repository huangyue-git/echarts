<template>
	<div id="tongcheng">
		<div id="con">
			<ul class="list">
				<li class="li" v-for="(item,index) in list" :key='index'>					
					<img class="image" v-if="item.tre_img[0]!==undefined" :src="item.tre_img[0].url"/>
					<div class="username">{{item.tre_descr}}</div> 
					<div class="user">
						<img v-if="item.user.headimgurl!==undefined" :src="item.user.headimgurl[0].url" />
						<img v-else src="../assets/3.png" />
						<p>{{item.user.name}}</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="footer"><span>暂无更多数据</span></div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
	  name: 'tongcheng',
	  data:function(){
		  return {
			  list:[],
		  }
	  },
	  components:{},
	  mounted:function(){
		  //获取数据
		  axios.post("https://www.jvhv.com/siteindex.php/Trends/SameCity.html").then((res)=>{
		  	console.log(res.data.data.list);
			this.list = res.data.data.list;
		  })
	  }
	}
</script>

<style lang="scss">
	ul,li{list-style: none;}
	#tongcheng{
		width: 22.1875rem;padding: 10px;
		#con{
			background-color: white;width: 100%;
			.list{
				display: flex;flex-direction: row;flex-wrap: wrap;width: 100%;
				.li{
					margin-bottom: 10px;width: 48%;justify-content: space-around;margin-right: 7px;
					display: flex;flex-direction: column;
					.image{width: 100%;height: 240px;object-fit: cover;}
					.username{padding: 7px;line-height: 20px;font-size: 15px;
							height: 40px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
					.user{
						height: 35px;
						display: flex;flex-direction: row;flex-wrap: nowrap;
						img{width: 35px;height: 35px;border-radius: 50%;}
						p{font-size: 14px;height: 35px;line-height: 35px;margin-left: 8px;}
					}
				}
			}
		}
		.footer{
			background-color: white;width: 100%;height: 30px;line-height: 30px;text-align: center;
			span{width: 100%;color: #777;font-size: 14px;}
		}
	}
</style>
