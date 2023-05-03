import { Children } from "../interfaces/ChildrenProps";
import { StatesProvider } from "./StateContext";

export const Providers = ({ children }: Children) => {
  return <StatesProvider>{children}</StatesProvider>;
};