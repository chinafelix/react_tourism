import {getData, postData, getDataWithNoToken, postDataWithNoToken} from "./http";
// import {getDataAjax} from "./https";


export default {

  //获取注册验证码
  getVertificationCode(data){
    return getDataWithNoToken('/api/sms/register.json',data).then(res =>{
      return res;
    })
  },

  // 注册
  register(data){
    return postDataWithNoToken('/api/user/register.json', data).then(res =>{
      return res;
    })
  },

  // 登录
  login(data){
    return postDataWithNoToken('/api/user/login.json',data).then(res =>{
      return res;
    })
  },

  //获取忘记密码的验证码
  getResetVerCode(data){
    return getDataWithNoToken('/api/sms/password/reset.json',data).then(res =>{
      return res;
    })
  },

  // 验证验证马
  validVerCode(data){
    return postDataWithNoToken('/api/sms/password/reset/valid.json',data).then(res =>{
      return res;
    })
  },

  //找回密码第三步，重新输入密码
  resetPassword(data){
    return postData('/api/user/password/reset.json',data).then(res =>{
      return res;
    })
  },

  //个人中心页，获取基本信息
  getUserInfo(data){
    return getData('/api/user/info.json',data).then(res =>{
      return res;
    })
  },

  /**
   * 首页接口
   *
   */

  // 获取景区信息
  getScienceData(){
    return getDataWithNoToken('/api/settings.json',{}).then(res =>{
      return res;
    })
  },

  // 获取banner图
  getBanner(){
    return getDataWithNoToken('/api/banner.json',{}).then(res =>{
      return res;
    })
  },

  // 景区公告---最新一条
  getLastBroadcast(){
    return getDataWithNoToken('/api/notice/last.json',{}).then(res =>{
      return res;
    })
  },

  // 景区公告列表--首页点击去
  getBroadcastList(){
    return getDataWithNoToken('/api/notice.json',{}).then(res =>{
      return res;
    })
  },

  // 当前位置
  getLocation(){
    return getDataWithNoToken('/api/settings/region.json',{}).then(res =>{
      return res;
    })
  },

  // 根据经纬度信息获取城市位置
  getRegionWithGeo(data){
    return getDataWithNoToken('/api/settings/regionByGeo.json',data).then(res =>{
      return res;
    })
  },

  // 天气
  getTemplature(){
    return getData('/api/settings/weater.json',{}).then(res =>{
      return res;
    })
  },

  // 景区须知
  getTips(){
    return getDataWithNoToken('/api/tips.json',{}).then(res =>{
      return res;
    })
  },

  // 景区介绍
  getIntroductions(){
    return getDataWithNoToken('/api/introduction.json',{}).then(res =>{
      return res;
    })
  },

  // 景区咨询
  getNews(data){
    return getDataWithNoToken('/api/news.json',data).then(res =>{
      return res;
    })
  },


}
