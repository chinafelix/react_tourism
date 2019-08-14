import React from 'react'
import { withRouter } from "react-router-dom";
// import PropTypes from 'prop-types'

import './style.scss'


class Nav extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: 1
    }
  }
  // static propTypes = {
  //   history: PropTypes.object.isRequired
  // }

  componentWillMount() {
    this.setState({
      active: this.props.active
    })
  }

  navigatorToSomeWhere(path){
    this.props.history.push(path);
  }


  render() {
    return (
      <div className='nav_wrapper'>
        <div className="nav_box">
            <div className={this.state.active===1 ? 'active':''} onClick={(e)=>{this.navigatorToSomeWhere('/')}}>
              <p className="home_nav common"></p>
              <p className='mini'>首页</p>
            </div>
            <div className={this.state.active===2 ? 'active':''} onClick={(e)=>{this.navigatorToSomeWhere('/buyer')}}>
              <p className="buyer_nav common"></p>
              <p className='mini'>购票</p>
            </div>
            <div className={this.state.active===3 ? 'active':''} onClick={(e)=>{this.navigatorToSomeWhere('/personal')}}>
              <p className="personal_nav common"></p>
              <p className='mini'>个人中心</p>
            </div>
        </div>
      </div>
    )
  }
}

const routerNav = withRouter(Nav)

export default routerNav;