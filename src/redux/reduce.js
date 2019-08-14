import { combineReducers } from 'redux'

const defaultCustomer = localStorage.customerInfo?JSON.parse(localStorage.customerInfo): '';

const customer = defaultCustomer?defaultCustomer:{};
const customerInfo = (state = customer,action) => {
  switch(action.type){
    case 'change':
      const text = action.text?action.text:null;
      text? localStorage.customerInfo = JSON.stringify(text) : localStorage.customerInfo = '';
      return text;
    default:
      return state;
  }
};

const Reducers = combineReducers({
  customerInfo
});

export default Reducers;