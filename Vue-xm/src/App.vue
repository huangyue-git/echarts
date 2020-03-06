<template>
  <div id="app">
	<div id="main"><router-view></router-view></div>
    <div id="nav">
      <router-link to="/">
		  <img src="https://www.jvhv.com/wap/static/images/footer_1_red.png" />
		  <li>首页</li>
	  </router-link>
      <router-link to="/find">
		  <img src="https://www.jvhv.com/wap/static/images/footer_6_red.png" />
		  <li>发现</li> 
	  </router-link>
	  <router-link to="/message">
		  <img src="https://www.jvhv.com/wap/static/images/footer_8_red.png" />
		  <li>消息</li>
	  </router-link>
	  <router-link to="/mine">
		  <img src="https://www.jvhv.com/wap/static/images/footer_5_red.png" />
		  <li>我的</li>
	  </router-link>
    </div>    
  </div>
</template>

<style lang="scss">
*{margin: 0;padding: 0;}
ul,li{padding: 0;margin: 0;}
#main{margin-bottom: 80px;}
#nav {
  background-color: white;
  margin-top: 3px;
  border-top: 1px solid #ddd;
  position:fixed;
  bottom: 0px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  width: 100%;
  a{	
	  color: black;
	  display: flex;
	  flex-direction: column;
	  img{width: 27px;height: 27px;margin-bottom: 3px;}
	  li{list-style: none;font-size: 12px;}
	}
   a:hover{color:#000; text-decoration: none;color: #005bac;}
}
</style>
