<!--<template>-->
  <!--<div>你好，<strong>{{pname}}</strong>，<slot></slot></div>-->
<!--</template>-->
<!--<script>-->
  <!--export default {-->
    <!--props: ['pname']-->
  <!--}-->
<!--</script>-->
<template>
  <div>
    <div>中锋：{{c}}</div>
    <div>大前：{{pf}}</div>
    <div>小前：<slot name="sf"></slot></div>
    <div>分卫：<slot name="sg"></slot></div>
    <div>控卫：<slot name="pg"></slot></div>
  </div>
</template>
<script>
  export default {
    props:['c', 'pf']
  }
</script>
