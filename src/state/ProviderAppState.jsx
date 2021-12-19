import { useReducer } from "react";
import Context from "./AppContext";
import initState from "./initState";
import reducer from "./reducer";

export default function ProviderAppState({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
      <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
    );
  }