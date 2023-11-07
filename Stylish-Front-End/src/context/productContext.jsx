import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext(null);

const testApiSearchEndpoint = "https://www.joazen.website/api/products/search";

export const ProductProvider = ({ children }) => {
  const [isMobileFilterShow, setIsMobileFilterShow] = useState(false);
  const [activeColorFilterButton, setActiveColorFilterButton] = useState(null);
  const [activeSizeFilterButton, setActiveSizeFilterButton] = useState(null);
  const navigate = useNavigate();
  const [urlToFetch, setUrlToFetch] = useState(
    `https://www.joazen.website/api/products/search`,
  );

  const sortingApis = {
    byRecommend: (category) => {
      const newUrlToFetch = `${testApiSearchEndpoint}?category=${category}`;
      setUrlToFetch(newUrlToFetch);
      return newUrlToFetch;
    },
    byReleaseTime: (category) => {
      const newUrlToFetch = `${testApiSearchEndpoint}?category=${category}&sorting=newest`;
      setUrlToFetch(newUrlToFetch);
      return newUrlToFetch;
    },
    byPrice: (sortOrder, category) =>
      `${testApiSearchEndpoint}?category=${category}&sorting=${sortOrder}`,
  };

  const filteringApis = {
    byColor: (colorName, category) => {
      let newUrlToFetch = urlToFetch;
      if (urlToFetch.includes("category=")) {
      } else {
        newUrlToFetch = newUrlToFetch + `?category=${category}`;
      }

      if (newUrlToFetch.indexOf("&color=") !== -1) {
        newUrlToFetch = newUrlToFetch.replace(
          /&color=[^&]*/,
          `&color=${colorName}`,
        );
      } else {
        newUrlToFetch += `&color=${colorName}`;
      }

      setUrlToFetch(newUrlToFetch);
      return newUrlToFetch;
    },
    bySize: (size, category) => {
      let newUrlToFetch = urlToFetch;
      if (urlToFetch.includes("category=")) {
      } else {
        newUrlToFetch = newUrlToFetch + `?category=${category}`;
      }

      if (newUrlToFetch.indexOf("&size=") !== -1) {
        newUrlToFetch = newUrlToFetch.replace(/&size=[^&]*/, `&size=${size}`);
      } else {
        newUrlToFetch += `&size=${size}`;
      }

      setUrlToFetch(newUrlToFetch);
      return newUrlToFetch;
    },
  };

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
  const [activeSortButton, _setActiveSortButton] = useState(0);
  async function sortByRecommend(category) {
    _setActiveSortButton(0);
    currentPriceOption !== 0 && _setCurrentPriceOption(0);
    if (category === "all") return;
    const apiEndpoint = sortingApis.byRecommend(category);
    setUrlToFetch(
      `https://www.joazen.website/api/products/search?category=${category}`,
    );
    navigate(`/?category=${category}&sorting=${category}`);
    const response = await fetch(apiEndpoint);
    console.log(response.data);
  }
  async function sortByReleaseTime(category) {
    _setActiveSortButton(1);
    currentPriceOption !== 0 && _setCurrentPriceOption(0);
    const apiEndpoint = sortingApis.byReleaseTime(category);
    setUrlToFetch(
      `https://www.joazen.website/api/products/search?category=${category}&sorting=newest`,
    );
    navigate(`/?category=${category}&sorting=newest`);
    const response = await fetch(apiEndpoint);
    console.log(response.data);
  }
  async function sortByPrice(num, category) {
    _setActiveSortButton(2);
    _setCurrentPriceOption(num);
    const sortOrder = ["price_asc", "price_desc"][num];
    const apiEndpoint = sortingApis.byPrice(sortOrder, category);
    setUrlToFetch(
      `https://www.joazen.website/api/products/search?category=${category}&sorting=${sortOrder}`,
    );
    navigate(`/?category=${category}&sorting=${sortOrder}`);
    const response = await fetch(apiEndpoint);
    console.log(response.data);
  }
  function resetSortOptions() {
    _setActiveSortButton(0);
    _setCurrentPriceOption(0);
  }
  async function filterByColor(colorName, category) {
    const endpoint = filteringApis.byColor(colorName, category);
    // console.log("endpoint in filterbycolor", endpoint);
    const searchParameters = endpoint.substring(endpoint.indexOf("?"));
    // console.log(searchParameters);
    navigate(`/${searchParameters}`);
    const response = await fetch(endpoint);
    console.log(response.data);
  }

  async function filterBySize(size, category) {
    const endpoint = filteringApis.bySize(size, category);
    // console.log("endpoint in filterbysize", endpoint);
    const searchParameters = endpoint.substring(endpoint.indexOf("?"));
    // console.log(searchParameters);
    navigate(`/${searchParameters}`);
    const response = await fetch(endpoint);
    console.log(response.data);
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
      setIsMobileFilterShow,
      filterByColor,
      filterBySize,
      setUrlToFetch,
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
