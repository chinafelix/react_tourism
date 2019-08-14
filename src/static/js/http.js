
import server from './serve'
// axios为不需要token的请求实例

// instance是需要传token的请求的实例

import axios from 'axios'
import qs from 'qs'

// 引入mint的提示框
import message from 'antd/lib/message';


// let baseUrl = 'http://localhost:8080/yxb';
if(process.env.NODE_ENV === 'development'){      //开发环境
  // baseUrl = '';
  // axios.default.baseURL = 'http://localhost:8080/yxb';
}else {     //生产或者测试环境
  // baseUrl = '';
  // axios.default.baseURL = 'http://localhost:8080/yxb';
}

// axios.defaults.headers.post['Content-Type']  = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.withCredentials=true;
axios.defaults.crossDomain=true;

const instance = axios.create({
  // baseURL: '/yxb'
  baseURL: server,
});

instance.defaults.withCredentials=true;
instance.defaults.crossDomain=true;


const _instance = axios.create({
  // baseURL: '/yxb'
  baseURL: server,
});

_instance.defaults.withCredentials=true;
_instance.defaults.crossDomain=true;

//
// const token = store.state.userInfo.token;
// instance.defaults.headers.common['Authorization'] = token;

// 请求拦截
instance.interceptors.request.use(config=> {

  // const token = store.state.userInfo.token;
  // config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization': token
  };

  // token && (config.headers.Authorization = token);
  // console.log(config);
  return config;

},error => {
  return Promise.error(error);
});

// 请求拦截
_instance.interceptors.request.use(config=> {

  // config.data = JSON.stringify(config.data);
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  return config;

},error => {
  return Promise.error(error);
});


// 响应拦截
instance.interceptors.response.use(res =>{
  if(res.status === 200){
    if(!res.data.success) {
      message.error(res.data.msg);
    }
    return Promise.resolve(res);
  }else {
    return Promise.reject(res);
  }
}, error =>{
  if(error.response.status) {
    switch (error.response.status) {
      // 对相应的错误码进行处理
    }
  }
});

// 响应拦截
_instance.interceptors.response.use(res =>{
  if(res.status === 200){
    // console.log(res);
    if(!res.data.success) {
      message.error(res.data.msg);
    }
    return Promise.resolve(res);
  }else {
    return Promise.reject(res);
  }
}, error =>{
  if(error.response.status) {
    switch (error.response.status) {
      // 对相应的错误码进行处理
    }
  }
});

/**
 * get请求
 */
export function getData(url, params){
  return new Promise((resolve,reject) =>{
    instance.get(url, {
      params: params
    }).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err.data);
    })
  })
}

/**
 * post请求
 */
export function postData(url, params) {
  return new Promise((resolve, reject) =>{
    instance.post(url, qs.stringify(params)).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}


/**
 * 不带token的get请求
 */
export function getDataWithNoToken(url, params){
  return new Promise((resolve,reject) =>{
    _instance.get(url, {
      params: params
    }).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err.data);
    })
  })
}

/**
 * 不带token的post请求
 */
export function postDataWithNoToken(url, params) {
  return new Promise((resolve, reject) =>{
    _instance.post(url, qs.stringify(params)).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  })
}






