import Filter from "./filter.png";

const SortMenu = () => {
  return (
    <>
      <div className="sm: mx-auto mt-8 flex h-20 w-[1160px] flex-row items-center justify-start gap-9 rounded-xl bg-gray-100 sm:mx-6 sm:mt-4 sm:h-10 sm:w-auto sm:justify-around sm:gap-0 sm:bg-transparent">
        <h1 className="text-default ml-6 text-[22px] sm:ml-0 sm:text-xs">
          排序選項：
        </h1>
        <button className="text-default h-10 w-60 rounded-lg border border-solid border-gray-400 text-xl leading-5 tracking-[0.5em] sm:h-5 sm:w-[90px] sm:rounded sm:px-1 sm:text-xs sm:tracking-widest">
          推薦排序
        </button>
        <button className="text-default h-10 w-60 rounded-lg bg-[#f4d2b5] text-xl leading-5 tracking-[0.5em] sm:h-5 sm:w-[90px] sm:rounded sm:px-1 sm:text-xs sm:tracking-widest">
          新上市
        </button>
        <button className="text-default flex h-10 w-60 flex-row items-center justify-center rounded-lg border border-solid border-gray-400 align-middle text-xl leading-5 tracking-[0.5em] sm:h-5 sm:w-[90px] sm:rounded sm:px-1 sm:text-xs sm:tracking-widest">
          <p>價格低至高</p>
          <ion-icon name="swap-vertical-outline"></ion-icon>
        </button>
        <img src={Filter} className="hidden h-10 w-10"></img>
        {/* 有點想做一下換頁按鈕在這邊，但先留起來當optional */}
      </div>
    </>
  );
};

export default SortMenu;
