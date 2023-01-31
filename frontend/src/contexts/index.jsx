import { StatesProvider } from "./StateContext";

export const Providers = ({ children }) => {
  return <StatesProvider>{children}</StatesProvider>;
};
