import React, { useState } from "react";

export const userContext = React.createContext();

export const ContextController = ({ children }) => {
  const initialState = {
    posts: []
  };

  const [state, setState] = useState(initialState);

  return (
    <userContext.Provider value={[state, setState]}>
      {children}
    </userContext.Provider>
  );
};