import toast from './index.vue'
const obj = {}
obj.install = function (Vue) {
  // toast.$el = undefied 因为安装插件的时候，组件还没有挂载
  console.log('fff', toast.$el)
  console.log('install le toast obj') // VUe.use()就会必然执行
  // 标准流程
  // 1、创建组件构造器（因为编译的时候组件已经成了render函数，在body中没有）
  const ToastConstructor = Vue.extend(toast)
  // 2、根据组件构造器，创建组件对象
  const Toast = new ToastConstructor()
  // 3、将组件对象手动挂载到某个html元素上
  Toast.$mount(document.body.append('div'))
  // 4、此时，tosat.$el就是div
  document.body.append(Toast.$el)
  Vue.prototype.$toast = Toast
}
export default obj