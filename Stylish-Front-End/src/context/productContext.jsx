import { createContext, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [currentPriceOption, setCurrentPriceOption] = useState(0);
  const [activeSortButton, setActiveSortButton] = useState(null);
  const value = {
    currentPriceOption,
    activeSortButton,
    actions: {
      setCurrentPriceOption,
      setActiveSortButton,
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
