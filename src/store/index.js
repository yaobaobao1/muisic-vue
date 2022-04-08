import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 三个模块
import geden from './module/geden'
import user from './module/user'

export default createStore({
  modules: {
    geden,
    user,
  },
  // 配置插件
  plugins: [
    // 默认存储在localStorage
    createPersistedState({
      // 本地存储名字
      key: 'day-09',
      // 指定需要存储的模块
      paths: ['user', 'geden']
    })
  ]
})



