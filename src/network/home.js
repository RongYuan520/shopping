import { request } from './index'
export function getHomeList () {
  return request({
    url: '/home/multidata',
    method: 'get'
  })
}