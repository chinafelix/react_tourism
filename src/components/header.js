import React from 'react'
import './style.scss'
import {withRouter} from 'react-router-dom'

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      back: false,      //左侧为 < 的样式
      delete: false,    //左侧为 X 的样式
      complete: false,  //右侧有按钮
      handleValid: false,   //左侧按钮是否会触发验证
    }
  }

  componentWillMount() {
    this.setState({
      title: this.props.title,
      complete: this.props.complete,
      handleValid: this.props.handleValid
    })
  }

  render() {
    let left = '';
    if(this.props.back){          //返回按钮
      left = 'back';
    }
    if(this.props.deleted){       //删除按钮
      left = 'deleted';
    }
    return (
      <div className='header_box'>
        <div className='left'>
          <div className={left} onClick={(e)=>{this.returnBack()}}></div>
        </div>
        <div className="center middle">{this.state.title}</div>
        <div className="right">
          <div className='middle' onClick={()=>{this.handleClick(true)}}>{this.state.complete}</div>
        </div>
      </div>
    )
  }

  returnBack(){
    this.props.history.goBack();
  }

  handleClick(obj){
    this.props.selected(obj);
  }
}

const routerHeader = withRouter(Header);

export default routerHeader;