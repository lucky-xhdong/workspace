import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
  count: 44
};
const mutations = {
  //如果想传其他的值怎么做？
  //第一个参数必须是state，这里的state其实就是前面定义好的state，也就说state其实是一个对象
  // jia({count:44}, n) {
  //   state.count++;
  // },
  //如果想继续传值，比如传值n，跟在state后面即可，这里也可以将n看作是一个对象，在模板中以{a:10}的方式使用，所以这里可以直接使用n.a
  jia(state, n) {
    state.count+=n.a;
  },
  jian(state) {
    state.count--;
    if (state.count <= 0) {
      state.count = 0;
    }
  }
};
//动态计算，与computed相反，computed是静态计算
//computed官方建议不要使用箭头函数，因为箭头函数的this指的是上一层，而不是本层，所以this会有一个穿透性的事件，并且是向上穿透而不是向下穿透
//1.要知道处理的对象
const getters = {
  count: function (state) {
    return state.count += 22
  }
};
//actions可以调用所有mutations里的方法，因此可以将actions看作一个异步批处理触发状态的集合，两种传值方式
//1.context：context是一个对象，代表整个store，通过context的commit属性调用mutations里的方法
//2.commit：直接传commit，用他调用mutations里的方法
const actions = {
  plus (context) {
    context.commit('jia', {a:1})
  },
  // minus (context) {
  //   context.commit('jian')
  // },
  minus ({commit}) {
    commit('jian')
  }
};

// export default new Vuex.Store({
//   state,
//   mutations,
//   getters,
//   actions
// })

//使用模块组的方式调用store状态和方法
//使用模块组之后，mapState里的状态将不再能取到，所以在模板中需要使用$store.state.a.count取值
const modulesA = {
  state,
  mutations,
  getters,
  actions
};
//模块组里的其他模块
const modulesB = {
  state: {
    countB: 99
  }
}
export default new Vuex.Store({
  modules: {
    a: modulesA,
    b: modulesB //调用其他模块
  }
})

