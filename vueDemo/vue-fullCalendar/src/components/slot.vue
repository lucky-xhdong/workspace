<template>
  <!--<div class="container">-->
    <!--<child-slot pname="zhangsan">-->
    <!--你的代码写的太low了！-->
    <!--</child-slot>-->
    <!--<child-slot pname="lisi">-->
    <!--你千万不要学zhangsan！-->
    <!--</child-slot>-->
    <!--<child-slot pname="wangwu">-->
    <!--你教教他们两吧！-->
    <!--</child-slot>-->
  <!--</div>-->
  <div class="container">
    <child-slot c="奥尼尔" pf="加内特">
      <span slot="sf">皮尔斯</span>
      <span slot="sg">雷阿伦</span>
      <span slot="pg">隆多</span>
    </child-slot>
  </div>
</template>
<script>
  import vue from 'vue'
  import childSlot from "./childSlot";
  export default {
    components: {
      childSlot
    }
  }
</script>
