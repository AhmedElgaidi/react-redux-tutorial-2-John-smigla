import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'

// Our components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';


const App = () => {
  return (
    <Provider store={ store }>
      <Navbar />
      <CartContainer />
    </Provider>
  )
}

export default App