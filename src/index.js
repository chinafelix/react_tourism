import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reduce from './redux/reduce'


import {HashRouter} from "react-router-dom";

import {renderRoutes} from "react-router-config";
import  routers from './router'
// import './static/css/style.css'

import 'lib-flexible'

import 'antd/dist/antd.css';      //全局引入antd样式
import './static/css/common.scss'     //全局样式


const store = createStore(reduce);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {renderRoutes(routers)}
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

