<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--因为使用了模块组，不能直接取到state里的状态，所以需要使用获取模块组里状态的方式取值-->
    <!--$store.state.b.countB模块组里的其他模块-->
    <!--<h2>{{$store.state.count}} - {{count}}</h2>-->
    <h2>{{$store.state.a.count}} - {{count}} - {{$store.state.b.countB}}</h2>
    <div class="btn-group">
      <button class="btn-plus" @click="$store.commit('jia', {a: 10})">+</button>
      <button class="btn-minus" @click="jian">-</button>
    </div>
    <div class="btn-group">
      <button class="btn-plus" @click="plus">+</button>
      <button class="btn-minus" @click="minus">-</button>
    </div>
  </div>
</template>

<script>
  //mapState替代在模板中使用长命名空间获取store文件中的state对象
  //mapMutations用来简化模板中触发状态对象的commit方法，即将$store.commit('jian')改为'jian'即可，注：mapMutations中的方法名放在数组[]而不是对象{}中
  //mapGetters替换computed的计算，computed为静态计算，mapGetters为动态计算
  //mapActions异步批处理触发状态集合
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Hello, vuex!',
        countA: 0 //计算count的方式：1.computed计算, 2.生命周期
      }
    },
    // computed: {
    //   //1.data里定义了变量count变量，这里再使用count作为方法名会抛错说count已定义，所以将data里的count重命名为countA，然后将store里的count赋值给countA，再对countA进行计算
    //   count () {
    //     this.countA = this.$store.state.count;//2.但是这里this.$store.state.count写法很累赘，比较繁琐，怎么优化？
    //     return this.countA+1;
    //   }
    // }
    //3.优化
    //3.1对象方式
    // computed: mapState({
    //   // count: state => state.count//简化写法
    //   count: function (state) {
    //     return state.count
    //   }
    // })
    //3.2数组方式
    computed: {
      // ...mapState([
      //   'count'
      // ]),
      //不使用mapGetters的方式
      // count() {
      //   return this.$store.getters.count
      // },
      //使用模块组取值
      count() {
        return this.$store.state.a.count
      },
      // ...mapGetters([
      //   'count'
      // ])
    },
    methods: {
      ...mapMutations([
        'jia',
        'jian'
      ]),
      //数组和对象调用方法的两种方式，推荐第二种
      ...mapActions([
        'plus',
        'minus'
      ]),
      // ...mapActions({
      //   minus: 'minus'
      // })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
