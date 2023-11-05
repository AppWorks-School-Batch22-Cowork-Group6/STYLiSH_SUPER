import productImg from "../product-main.png";
const Thumbnail = () => {
  return (
    <div className="flex h-[290px] shrink-0 flex-col justify-between rounded-lg bg-slate-50 px-5 py-3 lg:p-4">
      <img
        src={productImg}
        alt=""
        className="h-[120px] w-full rounded-md object-cover lg:h-[205px]"
      />
      <div className="flex gap-2">
        <div className="aspect-square w-4 bg-green-500"></div>
        <div className="aspect-square w-4 bg-green-500"></div>
        <div className="aspect-square w-4 bg-green-500"></div>
      </div>
      <h1 className="text-xs text-default">產品名稱</h1>
    </div>
  );
};

export default Thumbnail;
