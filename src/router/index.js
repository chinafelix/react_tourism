import App from '../pages/app'
import Home from '../pages/home/home'
import Buy from '../pages/buyer/buyer'
import Order from '../pages/order/index'
import Customer from '../pages/customers/index'
import Personal from '../pages/personal/index'
import ChangeCust from '../pages/changeCustomer/index'

export default [
  {
    component: App,
    childRoutes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/buyer',
        component: Buy
      },
      {
        path: '/order/:id',
        component: Order
      },
      {
        path: '/customer/:type',
        component: Customer
      },
      {
        path: '/personal',
        component: Personal
      },
      {
        path: '/changeCust/:info',
        component: ChangeCust
      },
    ]
  }
]