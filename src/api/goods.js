import http from '../utils/http'
export default {
  getTaskGoods: function (params) {
    return http.POST('goods/query_goods_images', params)
  },
  getAllGoods: function (params) {
    return http.GET('goods/query_goods', params)
  },
  getGoodsOrder: function (params) {
    return http.GET('goods/query_goods_from', params)
  }
}
