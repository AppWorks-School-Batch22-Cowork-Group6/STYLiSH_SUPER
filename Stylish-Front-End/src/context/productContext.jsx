import { createContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

const testApiEndpoint = "https://www.joazen.website/api/products/search";

const sortingApis = {
  byRecommend: (category) => `${testApiEndpoint}?category=${category}`,
  byReleaseTime: `${testApiEndpoint}?sorting=newest`,
  byPrice: (sortOrder) => `${testApiEndpoint}?sorting=${sortOrder}`,
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
    if (category === "all") return;
    const apiEndpoint = sortingApis.byRecommend(category);
    console.log("apiEndpoint: ", apiEndpoint);
  }
  async function sortByReleaseTime() {
    _setActiveSortButton(1);
    const apiEndpoint = sortingApis.byReleaseTime;
    console.log("apiEndpoint: ", apiEndpoint);
  }
  async function sortByPrice(num, category) {
    _setActiveSortButton(2);
    _setCurrentPriceOption(num);
    const sortOrder = ["", "price_asc", "price_desc"][num];
    const apiEndpoint = num === 0 ?
      sortingApis.byRecommend(category) :
      sortingApis.byPrice(sortOrder);
    console.log("apiEndpoint: ", apiEndpoint);
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
    },
  };
  return (
    <ProductContext.Provider value={ value }>{ children }</ProductContext.Provider>
  );
};

export default ProductContext;
