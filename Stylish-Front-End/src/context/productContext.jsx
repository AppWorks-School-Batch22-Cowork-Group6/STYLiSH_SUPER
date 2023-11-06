import { createContext, useState } from "react";

const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [currentPriceOption, setCurrentPriceOption] = useState(0);
  const [activeSortButton, setActiveSortButton] = useState(null);
  const [isMobileFilterShow, setIsMobileFilterShow] = useState(false);
  const [activeColorFilterButton, setActiveColorFilterButton] = useState(null);
  const [activeSizeFilterButton, setActiveSizeFilterButton] = useState(null);

  const colors = [
    {
      code: "FFFFFF",
      name: "白色",
    },
    {
      code: "DDFFBB",
      name: "亮綠",
    },
    {
      code: "CCCCCC",
      name: "淺灰",
    },
    {
      code: "BB7744",
      name: "淺棕",
    },
    {
      code: "DDF0FF",
      name: "淺藍",
    },
    {
      code: "334455",
      name: "深藍",
    },
    {
      code: "FFDDDD",
      name: "粉紅",
    },
  ];

  const sizes = ["S", "M", "L", "XL", "F"];

  const value = {
    currentPriceOption,
    activeSortButton,
    isMobileFilterShow,
    activeColorFilterButton,
    colors,
    sizes,
    activeSizeFilterButton,
    actions: {
      setActiveSizeFilterButton,
      setCurrentPriceOption,
      setActiveSortButton,
      setIsMobileFilterShow,
      setActiveColorFilterButton,
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
