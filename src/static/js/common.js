// {'2019-02-01': 21}

export default {
// 将对象转化为数组对象
  objToArray(obj) {
    let arr = [];
    for(let i in obj){
      arr.push({date: i, price: obj[i],disabled: false});
    }
    return arr;
  },

  // 控制显示的日期是否是当前或者不可选
  controlStatus(arr){
    let current;
    const now = new Date(),
          year = now.getFullYear(),
          month = now.getMonth()+1 >= 10 ? now.getMonth()+1 : `0${now.getMonth()+1}`,
          day = now.getDate() >=10 ? now.getDate() : `0${now.getDate()}`,
          hour  = now.getHours(),
          mints = now.getMinutes(),
          seconds = now.getSeconds(),
          date = `${year}-${month}-${day} ${hour}:${mints}:${seconds}`,
          standard = `${year}-${month}-${day} 16:00:00`;
    if(arr[0].date < standard && date > standard){        //当天16：30以后
      arr[0].disabled = true;
      current = arr[1];
    }else {
      current = arr[0];
    }
    return {arr, current};
  },

  formatterDate(now){
    const year = now.getFullYear(),
      month = now.getMonth()+1 >= 10 ? now.getMonth()+1 : `0${now.getMonth()+1}`,
      day = now.getDate() >=10 ? now.getDate() : `0${now.getDate()}`;

    let date = `${year}-${month}-${day}`;

    return date;
  },

  /* 是否手机号码*/
  validatePhone(value) {
    const reg =/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    if(value===''||value===undefined||value===null){
      return false;
    }else {
      if ((!reg.test(value)) && value !== '') {
        return false;
      } else {
        return true;
      }
    }
  },
  /* 是否身份证号码*/
  validateIdNo(value) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(value===''||value===undefined||value===null){
      return false;
    }else {
      if ((!reg.test(value)) && value !=='') {
        return false;
      } else {
        return true;
      }
    }
  },

  /* 是否密码*/
  validatePassword(value) {
    const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/;
    if(value===''||value===undefined||value===null){
      return false;
    }else {
      if ((!reg.test(value)) && value !== '') {
        return false;
      } else {
        return true;
      }
    }
  },

  trimAll(value){
    return value.replace(/\s*/g,"");
  },

  desensitization(str,beginStr,endStr){   //手机号码中间四位用*表示
    var len = str.length;
    var leftStr = str.substring(0,beginStr);
    var rightStr = str.substring(endStr,len);
    var str = '';
    var i = 0;
    try {
      for (i = 0; i < endStr-beginStr;i++) {
        str = str + '*';
      }
    } catch (error) {

    }
    str = leftStr + str + rightStr;
    return str;
  },

  cursorPosition(th){   //th是dom元素
    if(th.createTextRange){
      var rg=this.createTextRange();
      rg.collapse(false);
      rg.select();
    }else{
      setTimeout(function(){
        var len=th.value.length;
        th.setSelectionRange(len,len);
      },20);
    }

  },

  // 上下拉的时候的圆形样式
  calc_radius(h){        //求半径
    let r;
    r = (345*345 + h*h)/(2*h);
    // console.log(r);
    return r;
  },

  showCircle(e,){

  }

}


