import {getData, postData, getDataWithNoToken, postDataWithNoToken} from "./http";

export default {

  //  我的订单，-1 已取消， 0未支付， 1已支付 2已取票
  getMyOrder(data){
    return getData('/api/ticket/order.json',data).then(res =>{
      return res;
    })
  },

  // 取消订单
  cancel_order(id){
    return postData(`/api/ticket/order/cancel/${id}.json`).then(res =>{
      return res;
    })
  },

  // 删除订单
  delete_order(id){
    return postData(`/api/ticket/order/remove/${id}.json`).then(res =>{
      return res;
    })
  },

  // 我的取票人
  getMyTicketCollect(){
    return getData('/api/user/conact.json',{}).then(res =>{
      return res;
    })
  },

  // 添加取票人
  tiaketCollect_add(data){
    return postData('/api/user/conact/add.json',data).then(res =>{
      return res;
    })
  },

  // 添加取票人
  tiaketCollect_update(data){
    return postData('/api/user/conact/update.json',data).then(res =>{
      return res;
    })
  },

  // 删除取票人
  ticketCollect_delete(data){
    return postData('/api/user/conact/remove.json',data).then(res =>{
      return res;
    })
  },

  // 意见反馈
  postOpinion(data){
    return postData('/api/feedback/create.json',data).then(res=>{
      return res;
    })
  },

}

