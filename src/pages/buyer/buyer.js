import React from 'react'
import { withRouter } from "react-router-dom"
import Header from '../../components/header'
import Nav from '../../components/nav'
import './buyer.scss'
import https from '../../static/js/order_api'
// import {renderRoutes} from "react-router-config";

class Buyer extends React.Component{
  constructor(props){
    super(props);
    this.contentNode = React.createRef();    //生成ref对象
    this.state ={
      hots: [],
      adults: [],
      students: [],
      adultClose: true,       //成人票显隐
      studentClose: true,     //学生票显隐
    }
  }

  componentWillMount() {
    this.getTicketsList(1);
    this.getTicketsList(2);
    this.getTicketsList(3);
  }

  render(){
    return (
      <div className='home' ref={ this.contentNode }>
        <Header title='购票'></Header>
        <div className="content">
          <div className="intro">
            <span className='middle'>景区介绍</span>
            <span className='arr'></span>
          </div>

          {/*//热销票*/}
          <div className="tickets_item">
            <div className="item_title">
              <span className='middle'>热销门票</span>
            </div>
            <div className="item_contnet">
              {this.state.hots.map(item =>{
                return (
                  <div className="item" key={item.id}>
                    <div className="item_left">
                      <p>
                        <span className='large'>{item.title}</span>
                        <span className='hot small'>热销</span>
                      </p>
                      <p className='small'>{item.buyOverInfo}</p>
                      <p className='small'>{item.activeInfo}</p>
                      <p className='normal'>
                        <span>订票须知</span>
                        <span className='arr'></span>
                      </p>
                    </div>

                    <div className="item_right">
                      <p>
                        <span>￥</span>
                        <span className='larger'>{item.price}</span>
                        <span className='small'>起</span>
                      </p>
                      <div className="item_btn middle" onClick={()=>{this.navigatorToOrder(item.id)}}>预定</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/*//成人票*/}
          <div className="tickets_item">
            <div className="item_title" onClick={(e)=>{this.toggleItem(true)}}>
              <span className='middle'>成人门票</span>
              <span className={`arr ${this.state.adultClose ? 'active' : ''}`}></span>
            </div>
            <div className="item_contnet">
              {this.state.adultClose && this.state.adults.map(item =>{
                return (
                  <div className="item" key={item.id}>
                    <div className="item_left">
                      <p>
                        <span className='large'>{item.title}</span>
                      </p>
                      <p className='small'>{item.buyOverInfo}</p>
                      <p className='small'>{item.activeInfo}</p>
                      <p className='normal'>
                        <span>订票须知</span>
                        <span className='arr'></span>
                      </p>
                    </div>

                    <div className="item_right">
                      <p>
                        <span>￥</span>
                        <span className='larger'>{item.price}</span>
                        <span className='small'>起</span>
                      </p>
                      <div className="item_btn middle">预定</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/*//儿童票*/}
          <div className="tickets_item">
            <div className="item_title" onClick={(e)=>{this.toggleItem(false)}}>
              <span className='middle'>学生门票</span>
              <span className={`arr ${this.state.studentClose ? 'active' : ''}`}></span>
            </div>
            <div className="item_contnet">
              {this.state.studentClose && this.state.students.map(item =>{
                return (
                  <div className="item" key={item.id}>
                    <div className="item_left">
                      <p>
                        <span className='large'>{item.title}</span>
                      </p>
                      <p className='small'>{item.buyOverInfo}</p>
                      <p className='small'>{item.activeInfo}</p>
                      <p className='normal'>
                        <span>订票须知</span>
                        <span className='arr'></span>
                      </p>
                    </div>

                    <div className="item_right">
                      <p>
                        <span>￥</span>
                        <span className='larger'>{item.price}</span>
                        <span className='small'>起</span>
                      </p>
                      <div className="item_btn middle">预定</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <Nav active={2}></Nav>
      </div>
    )
  }

  toggleItem(bool){
    if(bool){     //成人
      this.setState({
        adultClose: !this.state.adultClose
      })
    }else{        //学生
      this.setState({
        studentClose: !this.state.studentClose
      })
    }
  }

  getTicketsList(index){
    https.getTicketsList(index).then(res =>{
      if(index===1){
        this.setState({
          hots: res.data
        })
      }else if(index===2){
        this.setState({
          adults: res.data
        })
      }else {
        this.setState({
          students: res.data
        })
      }
    })
  }

  navigatorToOrder(id){
    this.props.history.push(`/order/${id}`);
    // this.props.history.push({pathname: '/order', query:{id: id}});
  }

}

const routerBuyer = withRouter(Buyer);

export default routerBuyer;