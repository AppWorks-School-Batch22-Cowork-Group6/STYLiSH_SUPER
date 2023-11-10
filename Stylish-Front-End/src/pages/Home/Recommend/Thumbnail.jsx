import { Link } from "react-router-dom";

const Thumbnail = ({ image, colors, title, id }) => {
  return (
    <Link to={`/products/${id}`} className="contents">
      <div className="flex h-[160px] w-[106px] shrink-0 cursor-pointer flex-col justify-between rounded-lg bg-slate-50 p-2 lg:h-[290px] lg:w-[186px] lg:max-w-[186px] lg:p-4">
        <img
          src={image}
          alt={title}
          className="h-[120px] w-full rounded object-cover lg:h-[205px] lg:w-[154px] lg:rounded-md"
        />
        <div className="hidden gap-2 lg:flex">
          {colors.map((color, index, arr) => {
            if (index > 0) {
              if (color.code === arr[index - 1].code) {
                return;
              }
            }

            const colorBlockClass =
              "aspect-square w-2 lg:w-4 border border-solid border-gray-300 bg-[var(--color)]";

            return (
              <div
                style={{ "--color": color.code }}
                className={colorBlockClass}
                key={index}
              ></div>
            );
          })}
        </div>
        <h1 className="recommend-product-title whitespace-nowrap text-[10px] text-default lg:text-sm">
          {title}
        </h1>
      </div>
    </Link>
  );
};

export default Thumbnail;
