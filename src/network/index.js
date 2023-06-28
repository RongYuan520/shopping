import axios from 'axios'

export function request (config) {
  // 创建axios实例，因为多个baseURl等不同
  const instance = axios.create(config.baseConfig)
  // {
  //   baseURL: 'http://123.207.32.32:8000',
  //   timeout: 5000
  // }
  // 拦截
  instance.interceptors.request.use((config) => {
    return config
  }, (error) => {
    return error
  })

  instance.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    return error
  })
  // 发网络请求，返回调用结果
  return instance(config)
}