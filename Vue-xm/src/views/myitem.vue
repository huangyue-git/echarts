<template>
	<div id="itemlist">
		<!-- 内容页轮播图 -->
		<myswiper :swiperArr='swiperArr' type="itemlist" height='250px'></myswiper>	
		<div id="tag"><span @click="goback">＜</span></div>
		<!-- 内容页头部 -->
		<div class="content">
			<div class="title">{{itemlist.pro_name}}</div>
			<div class="text">{{itemlist.pro_timestr}}</div>
			<div>有效期：{{itemlist.pro_active_date_text}} |
				<span>场地：{{itemlist.pro_placestr}}</span>
			</div>
			<div class="price" v-if="itemlist.pro_price!==undefined">
				<span>{{itemlist.pro_price}}.0</span>元
			</div>
		</div>
		<!-- 可预约场馆 -->
		<div id="gymlist">
			<div class="head">可预约场馆<span>{{pro_gym_list.length}}</span></div>
			<ul>
				<li v-for="(item,index) in pro_gym_list">
					<router-link :to="'/mygym/'+item.gym_id">
					<div class="main">
						<img :src="item.gym_headimg[0].url" />
						<div class="text">
							<div>{{item.gym_name}}</div>
							<div>{{item.gym_address}}</div>
							<div>{{item.gym_distance}}</div>
						</div>						
					</div>
					</router-link>
				</li>
			</ul>
		</div>
		<!-- 可预约教练 -->
		<div id="starlist">
			<div class="head">可预约教练</div>
			<ul class="ullist">
				<li v-for="(item,index) in pro_star_list" @click="changefun(item)" :key='index'>{{item.star_name}}</li>
			</ul>
			<div class="con">
				<div v-if="jiaoliancon.length == 0" class="uu" >
					<img src="../assets/2.png" />
				</div>
				<ul v-else class="conul"  height='234.5px'>
					<li v-for="(item,index) in jiaoliancon" class="conli">
						<div class="main">
							<div class="ccc">
								<div><img :src="item.coach_headImg[0].url" /></div>
								<div>{{item.coach_name}}</div>
								<span>好评率{{item.coach_goodrate}}% &nbsp; &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;已上课{{item.coach_lesson_total}}节</span>
							</div>							
							<div class="text">
								<div>擅长领域 &nbsp; &nbsp;&nbsp;&nbsp; <span>{{(item.coach_distance/1000).toFixed(2)}}千米</span></div>
								<div>
									<ul class="menu">
										<li v-for="(item2,index) in item.coach_options">{{item2}}|</li>										
									</ul>
								</div>
							</div>						
						</div>
					</li>
				</ul>				
			</div>
		</div>
		<!-- 课程内容 -->	
		<div id="course">
			<div class="head">
				<span>课程内容</span>
			</div>
			<div class="con">
				<h2>课程说明</h2>
				<div class="para">
					<p>一、加减号的健身私教课是以您的健康为导向、根据您当前的身体状况制定符合您当前实际状态的课程内容！</p>
					<p>二、如果您是第一次在我们平台约课，我们将赠送您一节身体评估课程，旨在了解您的身体状况，制定合理的课程计划与运动方案。</p>
				</div>
				<h2>身体评估</h2>
				<div class="para">
					<span class="hh">一.基础信息咨询</span>
					<p>教练带会员进行基础的身体信息询问，方便更好的帮助会员解决问题，具体信息如下：</p>
					<p>① 基础健康信息填写:（包括运动基础、病史、训练目的）</p>
					<p>② 健康风险的评估</p>
				</div>
				<div class="para">
					<span class="hh">二.静态评估</span>
					<p>教练对会员进行静态评估，包括身体指数测量等，方便进行记录和对比，具体内容如下：</p>
					<p>① 四个面的观察</p>
					<p>② 身体围度测量</p>
				</div>
				<div class="para">
					<span class="hh">三.关节功能筛查</span>
					<p>教练通过8个动作对会员身体的各个关节进行检测，以便了解会员的关节运动能力；评估与排除运动风险</p>
				</div>
				<div class="para">
					<span class="hh">四.体适能评估</span>
					<p>由教练带会员进行体适能的测试，方便了解会员的运动能力，具体内容如下：</p>
					<p>① 3分钟踏板心率测试</p>
					<p>② 1分钟卷腹</p>
					<p>③ 1分钟俯卧撑</p>
					<p>④ 柔韧性测试</p>
				</div>
				<div class="para">
					<span class="hh">五.定制化训练内容</span>
					<p>根据会员身体评估结果与偏好的运动项目，定制会员的课程，并且现场陪同和指导会员完成运动目标。</p>
				</div>
				<h2>上课流程</h2>
				<div class="para">
					<span class="hh">一.课程预约</span>
					<p>平台的所有课程都是预约制，预约方法如下：</p>
					<p>① 登录加减号平台→会员中心→我的课程→完成预约</p>
					<p>② 收到课程预约成功信息</p>
				</div>
				<div class="para">
					<span class="hh">二.上课打卡</span>
					<p>由教练出示打卡二维码，您微信扫码打开，以确定您开始上课的时间和地点。</p>
				</div>
				<div class="para">
					<span class="hh">三.课程评价</span>
					<p>您的评价是我们队教练的考核依据之一，谢谢您的配合！</p>
				</div>
				<div class="para">
					<span class="hh">四.上课场馆</span>
					<p>您可以预约平台上的任何一家合作场馆！</p>
				</div>
			</div>
		</div>		
		<!-- 会员评价 -->
		<div id="pingjia">
			<span>会员评价</span>
		</div>
		<!-- 约课流程 -->
		<div id="yueke">
			<span class="head">约课流程</span>
			<div class="main">
				<ul>
					<li>1.购买</li>
					<li>2.约课</li>
					<li>3.签到</li>
					<li>4.评价</li>
					<router-link to="/courseknow" :id='$route.params.itemid'>
						<li>规则详情</li>
					</router-link>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	//引入 axios
	import axios from 'axios'; 
	import myswiper from '@/components/Home/myswiper.vue'
	export default{
		name:"myitem",
		data:function(){
			return {
				itemlist:{},//接收内容页的对象
				swiperArr:[],//轮播数据
				pro_gym_list:[],//可预约场馆数据
				pro_star_list:[],//可预约教练
				jiaoliancon:[],//用来接收点击的对应li的教练数据
			}
		},
		components:{myswiper},
		watch:{
			'$route'(to,from){}
		},
		mounted:function(){
			var pid = parseInt(this.$route.params.itemid);
			let params = new URLSearchParams();
			params.append('pro_id',pid);
			params.append('fid','')
			axios.post("https://www.jvhv.com/siteindex.php/Lesson/Detail.html",params
			).then((res)=>{
				console.log(res);
				this.itemlist = res.data.data;
				this.swiperArr = res.data.data.pro_imglist;
				this.pro_gym_list =res.data.data.pro_gym_list;
				this.pro_star_list = res.data.data.pro_star_list;
			})			   
		 },
		 methods:{
			 changefun:function(item){
				if(item.coach_list.length !== 0){
					this.jiaoliancon = item.coach_list;
				}else{
					this.jiaoliancon = [];
				}				 				 
			 },
			 goback:function(){
				 this.$router.go(-1);
			 }
		  }
		}
</script>

<style lang="scss">
	    *{padding: 0;margin: 0;}
		ul,li{list-style: none;}
		#itemlist{font-size: 14px;width: 100%;} 
		#main {width: 100%;height: 250px;background-color: #333333;position: relative;} 
		.swiper-container {width: 100%;height: 250px;}  
		.swiper-container img{height:250px;width: 100%;}
		#itemlist .content{width: 92%;padding: 15px 15px 0;border-bottom: #f5f5f5 solid 10px;}
		#itemlist .content div{margin: 10px 0;}
		.title{font-size: 24px;font-weight: 400;}
		#itemlist .content .text{margin-left: 24px;}
		#itemlist .content .price span{font-size: 23px;color: #ec1717;font-weight: bold;}
		#gymlist{
			width: 92%;margin: 0 15px;padding: 15px 0;border-bottom: #f5f5f5 solid 10px;
			.head{font-size: 19px;width: 100%;padding: 10px 0;position: relative;
				span{font-size: 12px;position: absolute;right: 0;}
			}
			ul{
				display: flex;flex-direction: row;flex-wrap: nowrap;height: 266px;overflow: scroll;
				li{
					margin-right: 10px;background-color: #eee;width: 50%;
					.main{
						display: flex;flex-direction: column;font-size: 12px;color: #555;
						img{width: 176px;border-radius: 10px;height: 120px;}
						.text{
							padding: 10px;height: 126px;
							div:nth-of-type(1){font-size: 14px;color: #000;height: 31%;}
							div:nth-of-type(2){margin: 15px 0 10px;height: 30%;}
							div:nth-of-type(3){height: 20%;}
						}
					}
				}
			}
		}
		#starlist{
			width: 92%;margin: 0 15px;padding: 15px 0;border-bottom: #f5f5f5 solid 10px;
			.head{font-size: 19px;width: 100%;padding: 10px 0;}
			.ullist{
				width: 100%;font-size: 17px;background: rgb(223, 243, 255);height: 48px;line-height: 48px;
				display: flex;flex-direction: row;flex-wrap: nowrap;margin-bottom: 10px;
				li{width: 25%;text-align: center;}
				}
			.con{
				width: 100%;
				.uu{height: 183px;text-align: center;line-height: 183px;}
				.conul{
					width:100%;height: height;display: flex;flex-direction: row;flex-wrap: nowrap;overflow: scroll;
						.conli{
							margin-right: 10px;background-color: #eee;width: 176px;border-radius: 10px;
							.main{
								width: 100%;display: flex;flex-direction: column;color: #999;font-size: 12px;
								.ccc{
									display: flex;flex-direction: column;border-bottom: 1px solid #999;height: 172px;width: 100%;
									div:nth-of-type(1){
										width: 100%;height: 50%;line-height: 50%;text-align: center;color: #000;margin: 15px 0;
										img{width: 70px;height: 70px;border-radius: 50%;}
									}
									div:nth-of-type(2){
										height: 30%;line-height: 30%;font-size: 17px;text-align: center;color: #000;
									}
									span{
										height: 20%;line-height: 20%;text-align: center;
									}
								}
								.text{
									display: flex;flex-direction: column;height:58.5px;padding: 10px;
									div:nth-of-type(1){font-size: 14px;color: #000;height: 19px;
										span{font-size: 12px;color: #999;}
									}
									div:nth-of-type(2){
										height: 16px;width: 100%;overflow: hidden;
										.menu{
											height: 16px;display: flex;flex-direction: row;flex-wrap: nowrap;width: 176px;overflow: hidden;
											li{margin-right: 0;width: 2.5rem;}
										}
									}
									
								}							
						}
					}
				}
			}
		}
		#course{
			width: 92%;margin: 0 15px;padding: 15px 0;border-bottom: #f5f5f5 solid 10px;
			.head{font-size: 19px;width: 100%;padding: 10px 0;}
			.con{
				width: 100%;
				h2{font-size:20px;margin: 5px 0;}
				.para{
					font-size: 14px;margin: 10px 0;
					p{margin: 5px 0;line-height: 24px;}
					.hh{font-weight: 400;}
					}
			}
		}
		#pingjia{
			width: 92%;margin: 0 15px;padding: 15px 0;border-bottom: #f5f5f5 solid 10px;
			span{font-size: 19px;width: 100%;padding: 10px 0;}
		}
		#yueke{
			width: 92%;margin: 0 15px;padding: 15px 0;border-bottom: #f5f5f5 solid 10px;
			.head{font-size: 19px;width: 100%;padding: 10px 0;}
			.main{
				width: 94%;margin: 10px 0;padding: 10px;height: 77px;line-height: 77px;
				ul{
					display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;font-size: 14px;
					border: 2px solid #eee;border-radius: 10px;
					a{text-decoration: none;color: red;}
				}
			}
		}
		#nav{display: none;}
		#tag{			
			span{color: white;font-size: 27px;z-index: 50;position: fixed;left: 10px;top: 10px;}
		}
</style>
