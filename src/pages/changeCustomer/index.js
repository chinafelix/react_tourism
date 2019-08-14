import React from 'react';
import Header from '../../components/header'
import './index.scss'
import {withRouter} from 'react-router-dom'
import common from '../../static/js/common'


class ChangeCust extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info: {
        name: '',
        phone: '',
        cardId: '',
      },
      startX: 0,
      startY: 0,
      height: {
        height: 0
      },
      bheight: {
        height: 0
      },
      style:{
        width: 0,
        height: 0
      }
    };
    this.changeInfo = this.changeInfo.bind(this);
  }

  componentWillMount() {
    const info = this.props.match.params.info;
    if(info) {
      let obj = JSON.parse(info);
      this.setState({
        info: obj
      })
    }
  }

  render() {
    return (
      <div className='edit_box' onTouchStart={(e)=>{this.position(e)}} onTouchMove={(e)=>{this.showStyle(e)}}
      onTouchEnd={(e)=>{this.touchEnd(e)}}>
        <Header back={true} title='编辑取票人' complete='删除' selected={()=>{this.deleteInfo()}}></Header>
        <div className="circle_box" style={this.state.height}>
          <div className="circle top_circle" ></div>
        </div>
        <div className="content">
          <div className="wrapper">
            <div className='item'>姓名及证件信息</div>
            <div className='item'>
              <span>姓名：</span>
              <input type="text" value={this.state.info.name} onChange={(e)=>{this.Change(1,e)}}/>
            </div>
            <div className='item'>
              <span>证件类型：</span>
              <span className='special'>身份证</span>
            </div>
            <div className='item'>
              <span>证件号码：</span>
              <input type="text" value={this.state.info.cardId} onChange={(e)=>{this.Change(2,e)}}/>
            </div>
            <div className='item'>
              <span>手机号：</span>
              <input type="phone" value={this.state.info.phone} onChange={(e)=>{this.Change(3,e)}}/>
            </div>
          </div>
          <div className="btn middle" onClick={this.changeInfo}>
            保存
          </div>
        </div>
        <div className="circle_box" style={this.state.bheight}>
          <div className="bottom_circle circle"></div>
        </div>
      </div>
    )
  }

  deleteInfo(){
    this.setState((pervState, props)=>{
      delete pervState.info.name;
    })
  }

  changeInfo(){
    console.log(this.state.info);
  }

  Change(type,e){
    if(type === 1){
      this.setState({info: Object.assign({}, this.state.info, {name: e.target.value})});
    }else if(type === 2){
      this.setState({
        info: {
          ...this.state.info,
          cardId: e.target.value
        }
      })
    }else{
      this.setState({
        info: {
          ...this.state.info,
          phone: e.target.value
        }
      })
    }
  }

  position(e){
    e.persist();
    // console.log(e);
    const page = e.changedTouches[0];
    this.setState({
      startX: page.pageX,
      startY: page.pageY
    })
  }

  showStyle(e){
    e.persist();
    // console.log(e);
    let scrollTop = e.changedTouches[0].pageY - this.state.startY,
      absTop = Math.abs(scrollTop);
    if(scrollTop > 10 && scrollTop < 40){
      this.setState({
        height: Object.assign({}, this.state.height, {height: absTop}),
      })
    }else if(scrollTop<0 && absTop > 10 && absTop < 40){
      this.setState({
        bheight: Object.assign({}, this.state.bheight, {height: absTop}),
      })
    }
  }

  touchEnd(){
    this.setState({
      height: Object.assign({},this.state.height, {height: 0}),
      bheight: Object.assign({},this.state.bheight, {height: 0})
    });
  }

}

const routerChangeCust = withRouter(ChangeCust);

export default routerChangeCust;