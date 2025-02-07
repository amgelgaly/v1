import React from 'react';
import { useCart } from '../../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems, removeItemFromCart, updateQuantity, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} - Quantity: {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;