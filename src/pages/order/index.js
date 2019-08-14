import React from 'react'
import Header from '../../components/header'
import './index.scss'
import https from '../../static/js/order_api'
import common from '../../static/js/common'
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";


class Order extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      info: {},
      allDates: [],       //所有的日期
      showDates: [],      //当前显示的三个日期
      currentDate: {},     //当前选中的日期
      number: 1,
      customerOnfo: {}
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const { info } = this.props;
    this.setState({
      id: id,
      customer: info.customerInfo
    });
    this.getOrderDetail(id);
  }

  render(){
    return (
      <div className="order_info_box">
        <Header back={true} title='订单填写'></Header>
        <div className="content">
          <div className="order_info_detail">
              {/*基本信息*/}
            <div className="order_info_info">
              <div className="order_info_info_left">
                <p>
                  <span className='large'>{this.state.info.title}</span>
                  <span className='hot small'>热销</span>
                </p>
                <p className='small'>{this.state.info.buyOverInfo}</p>
                <p className='small'>{this.state.info.activeInfo}</p>
                <p className='normal'>
                  <span>订票须知</span>
                  <span className='arr'></span>
                </p>
              </div>
              <div className="order_info_info_right">
                <span className='middle'>￥</span>
                <span className='larger'>43</span>
              </div>
            </div>
            {/*日期选择*/}
            <div className='order_info_date'>
              <div className="order_info_date_top">日期选择</div>
              <div className="order_info_date_middle">
                {this.state.showDates.map(item=>{
                  return (
                    <div className={`item small ${item.disabled?'disabled':''} ${this.state.currentDate.date===item.date?'active':''}`}
                         key={item.date} onClick={()=>{this.changeDate(item)}}>
                      <p>{item.date}</p>
                      <p>{item.price}元</p>
                    </div>
                  )
                })}
                <div className="item small more">
                  <p>更多日期</p>
                  <p className='arr'></p>
                </div>
              </div>

              <div className="order_info_date_bottom">
                <p>购买数量</p>
                <div className="numbers">
                  <span onClick={()=>{this.handleAddandSub(false)}}></span>
                  <span className='number'>{this.state.number}</span>
                  <span onClick={()=>{this.handleAddandSub(true)}}></span>
                </div>
              </div>
            </div>
          </div>
          <div className="customer_info">
            <div className="customer_info_title" onClick={()=>{this.navigatorToCustomer()}}>
              <p className='middle'>取票人信息</p>
              <p></p>
            </div>
            <div className="customer_info_ctx">
              <div className="item">
                <span>姓名</span>
                <input type="text" placeholder='必填' defaultValue={this.state.customer.name}/>
              </div>
              <div className="item">
                <span>手机号</span>
                <input type="phone" placeholder='请输入手机号' defaultValue={this.state.customer.phone}/>
              </div>
              <div className="item">
                <span>身份证号</span>
                <input type="text" placeholder='用于景区入园等凭证' defaultValue={this.state.customer.cardId}/>
              </div>
            </div>
          </div>

        </div>
        <div className="money_btn">
          <div className="btn_left middle">
            {`应付${this.state.number*this.state.currentDate.price}元`}
          </div>
          <div className="btn_right middle">
            提交订单
          </div>
        </div>

      </div>
    )
  }

  navigatorToCustomer(){
    this.props.history.push(`/customer/1`);
  }

  handleAddandSub(config){  //false减， true加
    if(config){
      this.setState({
        number: this.state.number +1
      })
    }else{
      if(this.state.number>1){
        this.setState({
          number: this.state.number - 1
        })
      }
    }
  }

  getOrderDetail(id){       //获取详情
    https.getTicketInfo(id).then(res =>{
      let prices = common.controlStatus(common.objToArray(res.data.prices));
      this.setState({
        info: res.data,
        allDates: prices.arr,
        showDates: prices.arr.slice(0,3),
        currentDate: prices.current
      })
    })
  }

  changeDate(item){       //选择日期
    if(!item.disabled){
      this.setState({
        currentDate: item
      })
    }
  }

}

function mapStateToProps(state) {
  return {info: state};
}

Order = connect(mapStateToProps)(Order);

const routeOrder = withRouter(Order);

export default routeOrder;