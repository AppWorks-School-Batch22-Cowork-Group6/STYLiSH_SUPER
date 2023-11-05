import { createContext, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [currentPriceOption, setCurrentPriceOption] = useState(0);
  const [activeSortButton, setActiveSortButton] = useState(null);
  const [isMobileFilterShow, setIsMobileFilterShow] = useState(false);
  const value = {
    currentPriceOption,
    activeSortButton,
    isMobileFilterShow,
    actions: {
      setCurrentPriceOption,
      setActiveSortButton,
      setIsMobileFilterShow,
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
