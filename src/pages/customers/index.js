import React from 'react'
import './index.scss'
import {withRouter} from 'react-router-dom'
import Header from '../../components/header'
import {connect} from "react-redux";
import {changeCustomer} from '../../redux/actions'

class Customer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      resource: true,      //false为不可选择， true为可选择
      lists: [
        {
          id:1,
          name: '冯侠',
          phone: '123567890',
          cardId: '5678920356789450987'
        },
        {
          id:2,
          name: '冯侠',
          phone: '17817885564',
          cardId: '362322199103056613'
        },
        {
          id:3,
          name: '冯侠',
          phone: '123567890',
          cardId: '5678920356789450987'
        },
      ],
      current:{}
    }
  }

  componentWillMount() {
    // type==1，resource为true；type==0, resource为false
    const type = parseInt(this.props.match.params.type);
    const defaultInfo = localStorage.customerInfo?JSON.parse(localStorage.customerInfo):null;
    if(type){
      this.setState({
        resource: true,
      })
    }else{
      this.setState({
        resource: false,
      })
    }
    if(defaultInfo){
      this.setState({
        current: defaultInfo
      })
    }else{
      this.setState({
        current: this.state.lists[0]
      })
    }
  }

  render(){
    const {dispatch} = this.props;
    let complete, current = {};
    if(this.state.resource){
      complete = '完成';
      current = this.state.current;
    }
    return (
      <div className='box'>
        <Header back={true} complete={complete} title='取票人管理' selected={()=>{dispatch(changeCustomer(this.state.current));this.selected();}}></Header>
        <div className="content">
          {this.state.lists.map(item=>{
            return (
              <div className={`item ${current.id===item.id?'active':''}`} key={item.id}
              onClick={()=>{this.selectCustomer(item)}}>
                <p className='middle'>
                  <span>{item.name}</span>
                  <span onClick={(e)=>{this.navigatorToModify(item,e)}}></span>
                </p>
                <p className='phone margin'>{`手机号：${item.phone}`}</p>
                <p className='margin'>{`身份证：${item.cardId}`}</p>
              </div>
            )
          })}

        </div>

      </div>
    )
  }

  selected(){
    this.props.history.goBack();
  }

  selectCustomer(obj){
    this.setState({
      current: obj
    })
  }

  navigatorToModify(item,e){
    let o = JSON.stringify(item);
    this.props.history.push(`/changeCust/${o}`);
  }
}

Customer = connect()(Customer);

const routerCustomer = withRouter(Customer);

export default routerCustomer;