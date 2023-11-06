import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProductContext = createContext(null);

const testApiSearchEndpoint = "https://www.joazen.website/api/products/search";

const sortingApis = {
  byRecommend: (category) => `${testApiSearchEndpoint}?category=${category}`,
  byReleaseTime: `${testApiSearchEndpoint}?sorting=newest`,
  byPrice: (sortOrder) => `${testApiSearchEndpoint}?sorting=${sortOrder}`,
};

export const ProductProvider = ({ children }) => {
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

  const [isWide, setIsWide] = useState(window.innerWidth >= 1280);
  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentPriceOption, _setCurrentPriceOption] = useState(0);
  const [activeSortButton, _setActiveSortButton] = useState(null);
  async function sortByRecommend(category) {
    _setActiveSortButton(0);
    currentPriceOption !== 0 && _setCurrentPriceOption(0);
    if (category === "all") return;
    const apiEndpoint = sortingApis.byRecommend(category);
    console.log("apiEndpoint: ", apiEndpoint);
    await fetch(apiEndpoint);
  }
  async function sortByReleaseTime() {
    _setActiveSortButton(1);
    currentPriceOption !== 0 && _setCurrentPriceOption(0);
    const apiEndpoint = sortingApis.byReleaseTime;
    console.log("apiEndpoint: ", apiEndpoint);
    await fetch(apiEndpoint);
  }
  async function sortByPrice(num) {
    _setActiveSortButton(2);
    _setCurrentPriceOption(num);
    const sortOrder = ["price_desc", "price_asc"][num];
    const apiEndpoint = sortingApis.byPrice(sortOrder);
    console.log("apiEndpoint: ", apiEndpoint);
    await fetch(apiEndpoint);
  }
  function resetSortOptions() {
    _setActiveSortButton(null);
    _setCurrentPriceOption(0);
  }
  const value = {
    currentPriceOption,
    activeSortButton,
    isMobileFilterShow,
    activeColorFilterButton,
    colors,
    sizes,
    isWide,
    activeSizeFilterButton,
    actions: {
      sortByPrice,
      sortByRecommend,
      sortByReleaseTime,
      resetSortOptions,
      setActiveColorFilterButton,
      setActiveSizeFilterButton,
      setIsMobileFilterShow
    },
  };
  return (
    <ProductContext.Provider value={ value }>{ children }</ProductContext.Provider>
  );
};

export default ProductContext;
