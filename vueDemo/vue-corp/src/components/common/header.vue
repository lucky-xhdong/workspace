<template>
  <!--header start-->
  <header class="header-wrapper">
    <div class="header-container">
      <div class="header-left">
        <a href="javascript:;" class="logo">同在云科技</a>
      </div>
      <div class="header-right">
        <ul>
          <li :class="{'active':routerName === 'home'}"><router-link :to="{path: '/'}" class="txt">首页</router-link></li>
          <li :class="{'active':routerName === 'mobile'}"><router-link :to="{path: 'mobile'}" class="txt">移动端</router-link></li>
          <li :class="{'active':routerName === 'bigData'}"><router-link :to="{path: 'bigData'}" class="txt">大数据</router-link></li>
          <!--<li :class="{'active':routerName === 'mobile'}"><router-link :to="{path: 'mobile'}" class="txt">区块链</router-link></li>-->
          <li :class="{'active':routerName === 'developNews'}"><router-link :to="{path: 'developnews'}" class="txt">开发资讯</router-link></li>
          <li :class="{'active':routerName === 'aboutUs'}"><router-link :to="{path: 'aboutus'}" class="txt">关于</router-link></li>
        </ul>
      </div>
    </div>
  </header>
  <!--header end-->
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        routerName: this.$router.history.current.name
      }
    },
    created() {
      console.log(this.$router.history.current.name)
    }
  }
</script>
