import { useContext } from "react";
import Context from "./AppContext";

export default function useAppState() {
  return useContext(Context);
}
