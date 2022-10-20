import request from './01-request'

export default {
  getList(model) {
    return request({
      url: '/theme/list',
      method: 'post',
      data: model
    })
  },
}