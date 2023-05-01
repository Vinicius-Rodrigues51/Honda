import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const StateValue = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isBackgorundActive, setIsBackgorundActive] = useState(false);

  return (
    <UserContext.Provider
      value={{
        showOptions,
        setShowOptions,
        isBackgorundActive,
        setIsBackgorundActive,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
