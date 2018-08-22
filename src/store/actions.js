 //多个mutation的操作,$store.dispatch('set_active_index')触发方法
 const actions = {
    set_active_index (context) {
         context.commit('set_active_index');
      },
 }