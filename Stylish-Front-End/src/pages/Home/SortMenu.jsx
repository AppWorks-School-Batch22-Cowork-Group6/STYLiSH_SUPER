// import { useState } from "react";
import classNames from "classnames";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import ProductContext from "../../context/productContext";

const SortMenu = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category") || "all";
  const priceTextOptions = ["價格低至高", "價格高到低"];

  const { actions, activeSortButton, currentPriceOption, isMobileFilterShow } =
    useContext(ProductContext);

  const priceIconOptions = [
    "M112 244l144-144 144 144M256 120v292",
    "M112 268l144 144 144-144M256 392V100",
  ];

  const PriceIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="sortIcon h-5 w-5 stroke-default pt-[1px] sm:h-[10px] sm:w-[10px]"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d={priceIconOptions[currentPriceOption]}
        />
      </svg>
    );
  };

  const FilterIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="filterIcon cursor-pointer stroke-default sm:h-5 sm:w-5 lg:hidden"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M32 144h448M112 256h288M208 368h96"
        />
      </svg>
    );
  };

  const handlePriceSortClick = () => {
    let num = currentPriceOption + 1;
    if (num === 2) {
      num = 0;
    }
    actions.sortByPrice(num, category);
  };

  const sortingButtonsClass = (id) => {
    return classNames({
      "h-10 w-60 rounded-lg text-xl leading-5 tracking-[0.5em] text-default sm:h-5 sm:w-auto sm:whitespace-nowrap sm:rounded sm:px-2 sm:text-xs sm:tracking-widest": true,
      "flex flex-row items-center justify-center align-middle": true,
      "border border-solid border-gray-400": !(activeSortButton === id),
      "bg-button":
        activeSortButton === id || (id === 0 && activeSortButton === null),
      "mr-auto": id === 2,
    });
  };

  return (
    (category !== "all" || keyword) && (
      <div className="mx-auto mt-8 flex h-20 w-[1160px] flex-row items-center justify-start gap-9 rounded-xl bg-gray-100 sm:mx-6 sm:-mb-[11px] sm:mt-1 sm:h-10 sm:w-auto sm:justify-start sm:gap-3 sm:bg-transparent">
        <h1 className="ml-6 text-[22px] text-default sm:ml-0 sm:hidden sm:whitespace-nowrap sm:text-xs">
          排序選項：
        </h1>
        <button
          className={sortingButtonsClass(0)}
          onClick={() => {
            actions.setActiveColorFilterButton(null);
            actions.setActiveSizeFilterButton(null);
            actions.sortByRecommend(category);
          }}
        >
          推薦排序
        </button>
        <button
          className={sortingButtonsClass(1)}
          onClick={() => {
            actions.setActiveColorFilterButton(null);
            actions.setActiveSizeFilterButton(null);
            actions.sortByReleaseTime(category);
          }}
        >
          新上市
        </button>
        <button
          className={sortingButtonsClass(2)}
          onClick={() => {
            actions.setActiveColorFilterButton(null);
            actions.setActiveSizeFilterButton(null);
            handlePriceSortClick();
          }}
        >
          <p>{priceTextOptions[currentPriceOption]}</p>
          <PriceIcon />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => actions.setIsMobileFilterShow(!isMobileFilterShow)}
        >
          <FilterIcon />
        </button>
      </div>
    )
  );
};

export default SortMenu;
