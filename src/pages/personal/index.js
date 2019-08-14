import React from 'react'
import './index.scss'
import Nav from '../../components/nav'
import {withRouter} from 'react-router-dom'


class Personal extends React.Component{
  constructor(props){
    super(props);
    this.navigatorToCustomer = this.navigatorToCustomer.bind(this);
    this.state = {
      userInfo: {
        
      }
    }
  }

  render() {
    let el;
    if(this.state.userInfo.userId){
      el = (<div>

      </div>);
    }else {
      el = (<div className='middle'>登录/注册</div>);
    }
    return (
      <div className='personal'>
        <div className="content">
          <div className="personal_info">
            <div className="personal_info_box">
              <div className="avatar">
                <img src={require('../../static/images/touxiang@3x.png')} width={70} alt=""/>
              </div>
              <div className='user_info'>
                {el}
              </div>
              <p>畅游长城，体验世界级奇观！</p>
            </div>
          </div>
          <div className='ticket_type'>
            <div className='nopay'>待支付</div>
            <div className='nouse'>待使用</div>
            <div className='used'>已使用</div>
            <div className='cenceled'>已取消</div>
          </div>
          <div className="customer_wrapper common_wrapper middle" onClick={this.navigatorToCustomer}>
            <p>取票人管理</p>
            <span className='arr'></span>
          </div>
          <div className="us_wrapper common_wrapper middle">
            <p className='us_avatar'>关于我们</p>
            <span className='arr'></span>
          </div>
          <div className="set_wrapper common_wrapper middle">
            <p className='set'>设置</p>
            <span className='arr'></span>
          </div>

        </div>
        <Nav active={3}></Nav>
      </div>
    );
  }

  navigatorToCustomer(){
    this.props.history.push(`/customer/0`);
  }
}

const routerPersonal = withRouter(Personal);

export default routerPersonal;