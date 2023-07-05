import {useContext} from "react";
import { AppContext } from "./Context";

export const useContextHook = () => {
    const allValues = useContext(AppContext);
    return allValues;
}