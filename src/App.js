import React from 'react';
import Routes from './Routes';
import { StateProvider } from './context/state';
const productsData = require('../Stub/products.json');
let localState = []
if (typeof window !== 'undefined') {
  localState = JSON.parse(window.localStorage.getItem('appStateLocal')) || [];
}

const App = () => {
  const initialState = {
    products: productsData,
    cartItems: localState.cartItems || []
  }

  const reducer = (state, action) => {
    let naviState = {};
    switch (action.type) {
      case 'addToCart':
        //  IF / ELSE
        naviState = {
          ...state,
          cartItems: [ ...state.cartItems, action.cartItem ]
        }
        break;
      case 'clearCart':
        naviState = {
          ...state,
          cartItems: []
        }
        break;
      default:
        naviState = state;
    }

    // LocalStorage
    window.localStorage.setItem('appStateLocal', JSON.stringify(naviState));
    
    // Return State object
    return naviState;
  };

  return(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes />
    </StateProvider>
  )
}

export default App;