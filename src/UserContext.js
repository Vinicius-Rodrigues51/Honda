import React, { createContext, useState } from "react";

export const userContext = createContext();

export const StateValue = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isBackgorundActive, setIsBackgorundActive] = useState(false);

  return (
    <userContext.Provider
      value={{
        showOptions,
        setShowOptions,
        isBackgorundActive,
        setIsBackgorundActive,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
