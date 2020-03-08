<template>
  <div id="find">
    <div class="head">
		<h3>发现</h3>
		<ul class="ul">
			<router-link to="/find/tuijian">推荐</router-link>
			<router-link to="/find/guanzhu">关注</router-link>
			<router-link to="/find/tongcheng">同城</router-link>
		</ul>		
	</div>
	<div class="con">
		<router-view></router-view>
	</div>
  </div>
</template>
<style lang="scss">
	ul,li{list-style: none;}
	#find{
		width: 100%;margin-bottom: 50px;
		.head{width: 100%;position: fixed;left:0;top: 0;background-color: white;
			h3{width: 100%;height: 29px;line-height: 29px;padding: 7px 3px;
			font-size: 16px;text-align: center;border-bottom: 1px solid #eee;}
			.ul{width: 100%;height: 48px;line-height: 48px;display: flex;
				flex-direction: row;flex-wrap: nowrap;justify-content: space-around;
				a{font-size: 17px;color: #999;text-decoration: none;
					&.router-link-exact-active {
						color:#004b9e;
						border-bottom:2px solid #004b9e;
						font-weight: bold;
					}
				}				
			}
		}
		.con{
			width: 100%;margin-top: 100px;background-color: #f6f6f6;
		}
	}
</style>