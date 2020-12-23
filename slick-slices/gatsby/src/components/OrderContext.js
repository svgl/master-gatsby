import React, { useState } from 'react';

// create context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // state goes here
  const [order, setOrder] = useState([]);
  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
