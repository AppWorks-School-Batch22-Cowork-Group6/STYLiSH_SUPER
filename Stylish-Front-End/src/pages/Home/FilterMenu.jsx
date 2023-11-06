import classNames from "classnames";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import ProductContext from "../../context/productContext";

const FilterMenu = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "all";

  const {
    isMobileFilterShow,
    actions,
    colors,
    sizes,
    isWide,
    activeColorFilterButton,
    activeSizeFilterButton,
  } = useContext(ProductContext);

  return (
    <>
      {isMobileFilterShow && !isWide && (
        <div className="fixed bottom-[60px] right-0 top-[102px] z-[899] w-full bg-[#ffffff80] lg:hidden">
          <div className="filterMenu fixed bottom-[60px] right-0 top-[102px] z-[899] flex w-80 flex-col rounded-l-lg bg-white ">
            <div className="filterHeader flex flex-row items-center justify-between rounded-tl-lg border-b border-solid border-gray-200 bg-gray-200 px-3 pb-3 pt-3">
              <h1 className="text-base font-bold text-default">篩選：</h1>
              <button onClick={() => actions.setIsMobileFilterShow(false)}>
                <CloseIcon />
              </button>
            </div>
            <div className="colorFilter mt-3 flex flex-col items-start justify-between border-b border-solid border-gray-200 pb-4 pl-3 pr-4">
              <div className="flex flex-row items-center gap-1">
                <ColorIcon />
                <h2 className="text-sm text-default">顏色</h2>
              </div>
              <div className="mt-2 grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-2">
                {colors.map((color, index) => {
                  return (
                    <button
                      key={`colorbtn-${index}`}
                      className={classNames({
                        "h-5 w-[93px] cursor-pointer text-xs text-default": true,
                        "bg-button": index === activeColorFilterButton,
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
            <div className="sizeFilter mt-3 flex flex-col items-start justify-between border-b border-solid border-gray-200 pb-4 pl-3 pr-4">
              <div className="flex flex-row items-center gap-1">
                <SizeIcon />
                <h2 className="text-sm text-default">尺寸</h2>
              </div>
              <div className="mt-2 grid grid-cols-3 grid-rows-2 gap-x-2 gap-y-2">
                {sizes.map((size, index) => {
                  return (
                    <button
                      key={`sizebtn-${index}`}
                      className={classNames({
                        "h-5 w-[93px] cursor-pointer text-xs text-default": true,
                        "bg-button": index === activeSizeFilterButton,
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
                  "bg-button": false,
                  "border-button border border-solid": true,
                })}
                onClick={() => console.log()}
              >
                重設條件
              </button>
              <button
                className={classNames({
                  "h-8 w-32 cursor-pointer text-xs text-default": true,
                  "bg-button": true,
                  "border border-solid border-gray-400": false,
                })}
                onClick={() => console.log()}
              >
                送出條件
              </button>
            </div>
          </div>
        </div>
      )}
      {isWide && category !== "all" && (
        <div className="mx-auto -mt-2 flex w-[1160px] flex-col gap-2 rounded-b-xl bg-gray-100 pb-5 pt-2">
          <div className="flex flex-row items-center gap-9 px-6">
            <h2 className="mr-[43px] text-[22px] text-default">顏色：</h2>
            {colors.map((color, index) => {
              return (
                <button
                  key={`wideColorbtn-${index}`}
                  className={classNames({
                    "h-7 w-[102px] cursor-pointer rounded-lg text-base text-default": true,
                    "bg-button": index === activeColorFilterButton,
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

          <div className="flex flex-row items-center gap-9 px-6">
            <h2 className="mr-[43px] text-[22px] text-default">尺寸：</h2>
            {sizes.map((size, index) => {
              return (
                <button
                  key={`wideSizebtn-${index}`}
                  className={classNames({
                    "h-7 w-[102px] cursor-pointer rounded-lg text-base text-default": true,
                    "bg-button": index === activeSizeFilterButton,
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
      )}
    </>
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

function ColorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[14px] w-[14px] stroke-default"
      viewBox="0 0 512 512"
    >
      <path
        d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <circle cx="144" cy="208" r="32" />
      <circle cx="152" cy="311" r="32" />
      <circle cx="224" cy="144" r="32" />
      <circle cx="256" cy="367" r="48" />
      <circle cx="328" cy="144" r="32" />
    </svg>
  );
}

function SizeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-[14px] w-[14px] stroke-default"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M304 96h112v112M405.77 106.2L111.98 400.02M208 416H96V304"
      />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="filterIcon h-[22px] w-[22px] cursor-pointer stroke-default pt-[2px]"
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
}
