
// axios为不需要token的请求实例

// instance是需要传token的请求的实例

// import axios from 'axios'
// import qs from 'qs'
import $ from 'jquery'

// 引入vuex
import store from '@/store/index'
// 引入mint的提示框
import { Toast } from 'mint-ui';


const token = store.state.userInfo.token;
const baseUrl = 'http://test.ming.32ui.cn/ming';

export default {
  getData(url, data,call) {
    // return new Promise((resolve, reject) =>{
    $.ajax({
      url: baseUrl+url,
      data: data,
      contentType: 'application/x-www-form-urlencoded',
      beforeSend(xhr){
        xhr.setRequestHeader('Authorization', token);
      },
      type: 'get',
      // xhrFields: {
      //   // withCredentials: true
      // },
      // crossDomain: true,
      success: function (res) {
        call(res);
      },
    })

    // })
  },
  getDataWithOutVercode(url, data, call){
    $.ajax({
      url: url,
      data: data,
      contentType: 'application/x-www-form-urlencoded',
      type: 'get',
      // xhrFields: {
      //   // withCredentials: true
      // },
      // crossDomain: true,
      success: function (res) {
        call(res);
      },
    })
  },
}


/**
 * get请求
 */
// export function getData(url, params){
//   return new Promise((resolve,reject) =>{
//     instance.get(url, {
//       params: params
//     }).then(res =>{
//       resolve(res.data);
//     }).catch(err =>{
//       reject(err.data);
//     })
//   })
// }

// /**
//  * post请求
//  */
// export function postData(url, params) {
//   return new Promise((resolve, reject) =>{
//     instance.post(url, qs.stringify(params)).then(res =>{
//       resolve(res.data);
//     }).catch(err =>{
//       reject(err.data)
//     })
//   })
// }
//
//
// /**
//  * 不带token的get请求
//  */
// export function getDataWithNoToken(url, params){
//   return new Promise((resolve,reject) =>{
//     _instance.get(url, {
//       params: params
//     }).then(res =>{
//       resolve(res.data);
//     }).catch(err =>{
//       reject(err.data);
//     })
//   })
// }
//
// /**
//  * 不带token的post请求
//  */
// export function postDataWithNoToken(url, params) {
//   return new Promise((resolve, reject) =>{
//     _instance.post(url, qs.stringify(params)).then(res =>{
//       resolve(res.data);
//     }).catch(err =>{
//       reject(err.data)
//     })
//   })
// }






