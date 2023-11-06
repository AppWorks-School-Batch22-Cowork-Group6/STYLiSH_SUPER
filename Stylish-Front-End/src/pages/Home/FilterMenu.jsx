// import classNames from "classnames";
import { useContext } from "react";
// import { useSearchParams } from "react-router-dom";
import classNames from "classnames";
import ProductContext from "../../context/productContext";

const FilterMenu = () => {
  const {
    isMobileFilterShow,
    actions,
    colors,
    sizes,
    activeColorFilterButton,
    activeSizeFilterButton,
  } = useContext(ProductContext);

  return (
    isMobileFilterShow && (
      <div className="filterMenu fixed right-0 top-[102px] z-[899] flex h-[73.3vh] w-80 flex-col rounded-l-lg bg-white lg:hidden">
        <div className="filterHeader flex flex-row items-center justify-between rounded-tl-lg border-b border-solid border-gray-200 bg-gray-200 pb-3 pl-3 pt-3">
          <h1 className="text-base font-bold text-default">篩選：</h1>
          <button onClick={() => actions.setIsMobileFilterShow(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="colorFilter mt-3 flex flex-col items-start justify-between border-b border-solid border-gray-200 px-3 pb-4">
          <h2 className="text-sm text-default">顏色</h2>
          <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2">
            {colors.map((color, index) => {
              return (
                <button
                  key={`colorbtn-${index}`}
                  className={classNames({
                    "h-5 w-24 cursor-pointer text-xs text-default": true,
                    "bg-[#cd874a94]": index === activeColorFilterButton,
                    "border border-solid border-gray-400":
                      index !== activeColorFilterButton,
                  })}
                  onClick={() => actions.setActiveColorFilterButton(index)}
                >
                  {color.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="sizeFilter mt-3 flex flex-col items-start justify-between border-b border-solid border-gray-200 px-3 pb-4">
          <h2 className="text-sm text-default">尺寸</h2>
          <div className="mt-2 grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2">
            {sizes.map((size, index) => {
              return (
                <button
                  key={`sizebtn-${index}`}
                  className={classNames({
                    "h-5 w-24 cursor-pointer text-xs text-default": true,
                    "bg-[#cd874a94]": index === activeSizeFilterButton,
                    "border border-solid border-gray-400":
                      index !== activeSizeFilterButton,
                  })}
                  onClick={() => actions.setActiveSizeFilterButton(index)}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
        <div className="filterFooter mt-auto flex flex-row items-center justify-around rounded-bl-lg border-b border-solid border-gray-200 bg-gray-200 px-3 pb-3 pt-3">
          <button
            className={classNames({
              "h-8 w-32 cursor-pointer text-xs text-default": true,
              "bg-[#cd874a94]": false,
              "border border-solid border-[#cd874a]": true,
            })}
            onClick={() => console.log()}
          >
            重設條件
          </button>
          <button
            className={classNames({
              "h-8 w-32 cursor-pointer text-xs text-default": true,
              "bg-[#cd874a94]": true,
              "border border-solid border-gray-400": false,
            })}
            onClick={() => console.log()}
          >
            送出條件
          </button>
        </div>
      </div>
    )
  );
};

export default FilterMenu;

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 stroke-default"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
}
