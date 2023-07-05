import { AppContext } from "./Context";

export const Provider = ({ children }) => {
  const allValues = {};
  return (
    <AppContext.Provider value={allValues}>{children}</AppContext.Provider>
  );
};
