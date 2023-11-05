import productImg from "../product-main.png";
const Thumbnail = () => {
  return (
    <div className="flex h-40 shrink-0 cursor-pointer flex-col justify-between rounded-lg bg-slate-50 p-2 lg:h-[290px] lg:p-4">
      <img
        src={productImg}
        alt=""
        className="h-[120px] w-full rounded object-cover lg:h-[205px] lg:rounded-md"
      />
      <div className="hidden gap-2 lg:flex">
        <div className="aspect-square w-2 bg-green-500 lg:w-4"></div>
        <div className="aspect-square w-2 bg-green-500  lg:w-4"></div>
        <div className="aspect-square w-2 bg-green-500 lg:w-4"></div>
      </div>
      <h1 className="text-xs text-default lg:text-sm">產品名稱</h1>
    </div>
  );
};

export default Thumbnail;
