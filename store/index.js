import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)

const state = {
  // 文章列表
  articleList: {},
  // 目录列表
  catalogList: [],
  // 文章
  article: ''
}

const store = () => new Vuex.Store({
  state,
  mutations
})

export default store
