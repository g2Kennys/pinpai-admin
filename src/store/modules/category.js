import { post, get } from '@/utils/request'

export default {
  namespaced: true,
  state: {
    categories: [],
    visible: false,
    title: '添加栏目信息'
  },
  getters: {
    categorySize(state) {
      return state.categories.length
    },
    orderCategory: (state) => {
      return function(flag) {
        state.categories.sort((a, b) => {
          if (a[flag] > b[flag]) {
            return -1
          } else {
            return 1
          }
        })
        return state.categories
      }
    }
  },
  // 突变，修改state唯一方式
  mutations: {
    showModal(state) {
      state.visible = true
    },
    closeModal(state) {
      state.visible = false
    },
    refreshCategories(state, categories) {
      state.categories = categories
    },
    // 设置模态框标题的方法
    setTitle(state, title) {
      state.title = title
    }
  },
  // 动作，封装异步代码，进而提交突变
  actions: {
    //
    async batchDeleteCategory(context, ids) {
      // 1. 批量删除
      const response = await post('/category/batchDelete', { ids })
      // 2. 分发
      context.dispatch('findAllCategories')
      // 3. 返回结果
      return response
    },
    //
    async deleteCategoryById(context, id) {
      const response = await get('/category/deleteById?id=' + id)
      context.dispatch('findAllCategories')
      return response
    },
    // 刷新页面数据的方法
    async findAllCategories(context) {
      // 1. ajax查询
      const response = await get('/category/findAll')
      // 2. 将查询结果更新到state中
      context.commit('refreshCategories', response.data)
    },
    // 提交栏目信息的方法,第一个参数是context,用于访问方法，第二个才是我们传的参数
    async saveOrUpdateCategory({ commit, dispatch }, payload) {
      // 1. 保存或更新，拿到一个承诺
      const response = await post('/category/saveOrUpdate', payload)
      console.log('payload', payload)
      // 2. 刷新页面，访问action的方法
      dispatch('findAllCategories')
      // 3. 关闭模态框，访问mutations方法
      commit('closeModal')
      // 4. 提示，返回承诺
      return response
    }
  }
}
