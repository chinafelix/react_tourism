import React from 'react'
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default function (props) {
  return (
    <ReactCSSTransitionGroup
      transitionName="fadeBottom"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}>

      <img className="feed__loading-item" src={props.img} />
    </ReactCSSTransitionGroup>
  )
}