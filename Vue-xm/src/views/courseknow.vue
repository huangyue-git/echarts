<template>
	<div id="course">
		<div class="head">
			<span @click="goback">＜</span>
			<span>上课须知</span>
		</div>
		<div class="con">
			<div class="content">
				<div class="title">课程内容</div>
				<div class="para">
					<span class="h">⒈安全检查</span>
					<p>检查装备、服装、配饰、水和纸巾等。</p>
				</div>
				<div class="para">
					<span class="h">⒉课前热身</span>
					<p>运动开始前开始关节运动、心肺热身、肌肉激活、动态伸展等热身运动</p>
				</div>
				<div class="para">
					<span class="h">⒊针对性训练</span>
					<p>躯干激活、动作准备、针对客户目标集中训练</p>
				</div>
				<div class="para">
					<span class="h">⒋冷身放松</span>
					<p>拉伸、泡沫轴／筋膜球放松</p>
				</div>
			</div>
			<div class="content">
				<div class="title">约课规则</div>
				<div class="para">
					<span class="h">⒈联系</span>
					<p>① 购课成功后2小时内教练会与您联系。</p>
					<p>② 您可以在“我的-我的私教”中查看自己已购买的私教课及教练联系方式。</p>
				</div>
				<div class="para">
					<span class="h">⒉预约</span>
					<p>① APP中点击“我的-我的私教-在线约课”可以查看教练的空闲时间段。</p>
					<p>② 选择您期望上课的时间和门店即可“发起预约”。</p>
				</div>
				<div class="para">
					<span class="h">⒊取消预约</span>
					<p>① 在您预约的时间开始前2小时内不可以取消课程，如需取消请至少提前2小时与教练沟通并在“我的-我的课程”自主取消对应课程。</p>
					<p>② 如有不可抗力因素造成的迟到或旷课，可进入“需要帮助”页面联系客服处理。</p>
				</div>
				<div class="para">
					<span class="h">⒋确认完课</span>
					<p>① 课程正常结束后，点击“我的-我的课程-确认完课”即可确认课程，完课后课时费将正常结算给教练。</p>
					<p>② 若教练签到您3天都未确认课程，系统将自动确认。</p>
				</div>
				<div class="para">
					<span class="h">⒌旷课</span>
					<p>截至预约日期当天24点教练未签到，系统将判定本节课程旷课，课程权益将重新归还至您的账户，可重新预约。</p>
				</div>
			</div>
			<div class="content">
				<div class="title">需要帮助</div>
				<div class="para">
					<p>① 如教练有无故迟到、旷课现象，课程结束后2小时内您可以发起申述，系统核实后会做相应的教练处罚。</p>
					<p>②其他临时突发情况可点击课程页面左下角“需要帮助”按钮联系客服（客服工作时间：9:00~21:00）</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			goback:function(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style lang="scss">
	#course{
		width: 100%;background-color: #f5f5f5;
		.head{
			width: 100%;padding: 7px 3px;height: 44px;line-height: 44px;font-size: 16px;background: white;
			span:nth-of-type(1){font-size: 27px;margin-right: 125px;}
			span:nth-of-type(2){height: 44px;line-height: 44px;}
		}
		.con{
			width: 100%;
			.content{
				margin: 15px 10px;
				padding: 10px;background: white;border-radius: 10px;
				.title{font-size: 16px;color: #004b9e;margin: 0 0 8px;}
				.para{
					margin: 15px;font-size: 14px;
					.h{font-weight: 400;}
				}
			}
		}
	}
	#nav{display: none;}
</style>
