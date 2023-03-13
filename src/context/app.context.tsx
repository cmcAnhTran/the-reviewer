import React, { createContext, useState } from "react";

interface AppContextInterface {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>({
  isAuth: Boolean(localStorage.getItem("isLogin")),
  setIsAuth: () => null,
});

export const AppProvider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(
    Boolean(localStorage.getItem("isLogin"))
  );
  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};
