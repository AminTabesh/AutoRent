import { createContext, useContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [activeFaq, setActiveFaq] = useState(1);
  const [activeCarFilter, setActiveCarFilter] = useState("popular");
  function faqClickHandler(id) {
    setActiveFaq(id);
  }
  return (
    <Context.Provider
      value={{
        activeFaq,
        setActiveFaq,
        faqClickHandler,
        activeCarFilter,
        setActiveCarFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useAuto() {
  const context = useContext(Context);

  if (context === undefined)
    throw new Error("Custom hook was used outside of its provider.");

  return context;
}

export { ContextProvider, useAuto };
