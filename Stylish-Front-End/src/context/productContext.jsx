import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductContext = createContext(null);

const testApiSearchEndpoint = "https://www.joazen.website/api/products/search";

export const ProductProvider = ({ children }) => {
  const [isMobileFilterShow, setIsMobileFilterShow] = useState(false);
  const [activeColorFilterButton, setActiveColorFilterButton] = useState(null);
  const [activeSizeFilterButton, setActiveSizeFilterButton] = useState(null);
  const [newEndpoint, setNewEndPoint] = useState(null);
  const navigate = useNavigate();
  const [urlToFetch, setUrlToFetch] = useState(null);

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
    const endpoint = `${testApiSearchEndpoint}?category=${category}`;
    setUrlToFetch(endpoint);
    navigate(`/?category=${category}&sorting=recommend`);
  }

  async function sortByReleaseTime(category) {
    _setActiveSortButton(1);
    currentPriceOption !== 0 && _setCurrentPriceOption(0);
    const endpoint = `${testApiSearchEndpoint}?category=${category}&sorting=newest`;
    setUrlToFetch(endpoint);
    navigate(`/?category=${category}&sorting=newest`);
  }

  async function sortByPrice(num, category) {
    _setActiveSortButton(2);
    _setCurrentPriceOption(num);
    const sortOrder = ["price_asc", "price_desc"][num];
    const endpoint = `${testApiSearchEndpoint}?category=${category}&sorting=${sortOrder}`;
    setUrlToFetch(endpoint);
    navigate(`/?category=${category}&sorting=${sortOrder}`);
  }

  function resetSortOptions() {
    _setActiveSortButton(0);
    _setCurrentPriceOption(0);
  }

  async function filterByColor(colorName, category) {
    const endpoint = filteringApis.byColor(colorName, category);
    setUrlToFetch(endpoint);

    const searchParameters = endpoint.substring(endpoint.indexOf("?"));
    navigate(`/${searchParameters}`);
  }

  async function filterBySize(size, category) {
    const endpoint = filteringApis.bySize(size, category);
    setUrlToFetch(endpoint);

    const searchParameters = endpoint.substring(endpoint.indexOf("?"));
    navigate(`/${searchParameters}`);
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
    newEndpoint,
    urlToFetch,
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
      setNewEndPoint,
    },
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
