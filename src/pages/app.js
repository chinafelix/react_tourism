import React from 'react'
import {renderRoutes} from "react-router-config";

class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }


  render(){
    return (
      <div id='tourism_app_box'>
        {renderRoutes(this.props.route.childRoutes)}
      </div>
    )
  }
}

export default App;