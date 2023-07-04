import { request } from './index'
export function getHomeList () {

  return request({
    // baseConfig: {
    //   baseURL: 'http://123.207.32.32:8000',
    //   timeout: 5000
    // },
    url: '/home/multidata',
    method: 'get'
  })
}
export function getHomeGoods (type, page) {
  return request({
    // baseConfig: {
    //   baseURL: 'http://123.207.32.32:7888/api/hy66',
    //   timeout: 5000
    // },
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}