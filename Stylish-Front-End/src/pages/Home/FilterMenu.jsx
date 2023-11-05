// import classNames from "classnames";
import { useContext } from "react";
// import { useSearchParams } from "react-router-dom";
import ProductContext from "../../context/productContext";

const FilterMenu = () => {
  const { isMobileFilterShow, actions } = useContext(ProductContext);
  console.log("isMobileFilterShow: ", isMobileFilterShow);

  return (
    isMobileFilterShow && (
      <div className="filterMenu fixed right-0 top-[102px] z-[899] flex h-[880px] w-4/5 flex-col rounded-l-lg bg-white pl-2 pt-3 lg:hidden">
        <div className="flex flex-row items-center justify-between border-b border-solid border-gray-200 pb-3">
          <h1 className="text-base font-bold text-default">篩選：</h1>
          <button onClick={() => actions.setIsMobileFilterShow(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-row items-center justify-between border-b border-solid border-gray-200 pb-3">
          <h2 className="text-sm text-default">顏色：</h2>
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
