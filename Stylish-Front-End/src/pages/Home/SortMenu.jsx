// import { useState } from "react";
import classNames from "classnames";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortMenu = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const [currentPriceOption, setCurrentPriceOption] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const priceIconOptions = [
    "M464 208L352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96",
    "M112 244l144-144 144 144M256 120v292",
    "M112 268l144 144 144-144M256 392V100",
  ];

  const priceTextOptions = ["價格排序", "價格低至高", "價格高到低"];

  const handleSortingClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const handlePriceSortClick = (e, buttonId) => {
    let num = currentPriceOption + 1;
    if (num === 3) {
      num = 0;
    }
    setCurrentPriceOption(num);
    setActiveButton(buttonId);
  };

  const isButtonActive = (buttonId) => {
    return activeButton === buttonId;
  };

  const sortingButtonsClass = (id) => {
    return classNames({
      "h-10 w-60 rounded-lg text-xl leading-5 tracking-[0.5em] text-default sm:h-5 sm:w-auto sm:whitespace-nowrap sm:rounded sm:px-2 sm:text-xs sm:tracking-widest": true,
      "flex flex-row items-center justify-center align-middle sm:mr-auto":
        id === 2,
      "border border-solid border-gray-400": !isButtonActive(id),
      "bg-[#f4d2b5]": isButtonActive(id),
    });
  };

  return (
    category !== "all" && (
      <div className="sm: mx-auto mt-8 flex h-20 w-[1160px] flex-row items-center justify-start gap-9 rounded-xl bg-gray-100 sm:mx-6 sm:-mb-[11px] sm:mt-1 sm:h-10 sm:w-auto sm:justify-start sm:gap-3 sm:bg-transparent">
        <h1 className="ml-6 text-[22px] text-default sm:ml-0 sm:hidden sm:whitespace-nowrap sm:text-xs">
          排序選項：
        </h1>
        <button
          className={sortingButtonsClass(0)}
          onClick={() => handleSortingClick(0)}
        >
          推薦排序
        </button>
        <button
          className={sortingButtonsClass(1)}
          onClick={() => handleSortingClick(1)}
        >
          新上市
        </button>
        <button
          className={sortingButtonsClass(2)}
          onClick={(e) => handlePriceSortClick(e, 2)}
        >
          <p>{priceTextOptions[currentPriceOption]}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-5 w-5 stroke-default pt-[1px] sm:h-[10px] sm:w-[10px]"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d={priceIconOptions[currentPriceOption]}
            />
          </svg>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="cursor-pointer stroke-default sm:h-5 sm:w-5 lg:hidden"
        >
          <path
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M32 144h448M112 256h288M208 368h96"
          />
        </svg>
      </div>
    )
  );
};

export default SortMenu;
