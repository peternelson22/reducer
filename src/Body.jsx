import { useReducer, useState } from 'react';
import cartItems from './data';

const Body = () => {
  //const [cart, setCart] = useState()

  const initialState = {
    cart: cartItems,
    loading: false,
  };

  const reducer = (state, action) => {
    if (action.type === 'CLEAR') {
      return { ...state, cart: [] };
    }
    if (action.type === 'RESET') {
      return { ...state, cart: cartItems };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: 'CLEAR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <div>
      {state.cart.map((cart) => (
        <div key={cart.id}>
          <img src={cart.img} alt='' />
          <p>{cart.title}</p>
        </div>
      ))}
      <button className='btn' onClick={clearCart}>
        clear
      </button>
      <button onClick={reset} className='btn'>
        reset
      </button>
    </div>
  );
};
export default Body;
