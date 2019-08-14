import {getData, postData, getDataWithNoToken, postDataWithNoToken} from "./http";

export default {

  // 门票列表
  getTicketsList(index){
    return getDataWithNoToken(`/api/ticket/${index}.json`,{}).then(res =>{
      return res;
    })
  },

  // 订票须知
  getTipsWithId(index){
    return getDataWithNoToken(`/api/ticket/tips.json?ticketId=${index}`,{}).then(res =>{
      return res;
    })
  },

  // 门票信息
  getTicketInfo(id){
    return getDataWithNoToken(`/api/ticket/info/${id}.json`,{}).then(res =>{
      return res;
    })
  },


  // 提交订单
  submitOrder(data){
    return postData('/api/ticket/order/buy.json',data).then(res =>{
      return res;
    })
  },

  // 支付
  unionPay(id){
    return postData(`/api/ticket/order/pay/${id}.json`,{}).then(res =>{
      return res;
    })
  },

  // 门票详情
  getTicket_detail(id){
    return getData(`/api/ticket/order/info/${id}.json?`).then(res =>{
      return res;
    })
  }
}

