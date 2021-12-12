import React, { useState, useContext, useReducer, useEffect } from "react";
import { useFetch } from "./useFetch";
// import cartItems from './data'
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const initiateCart = (fromFetch) => {
    return dispatch({ type: "INITIATE", payload: fromFetch });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };
  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const handleIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const handleDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const { isLoading } = useFetch(url, initiateCart);

  return (
    <AppContext.Provider
      value={{
        cart,
        clearCart,
        isLoading,
        handleRemove,
        handleIncrease,
        handleDecrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
