import { IActiveContext } from "../types/types";
import { createContext } from "react";

export const ActiveContext = createContext<IActiveContext | undefined>(
  undefined
);
