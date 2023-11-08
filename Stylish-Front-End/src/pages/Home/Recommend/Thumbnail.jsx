const Thumbnail = ({ image, colors, title }) => {
  return (
    <div className="flex h-40 shrink-0 cursor-pointer flex-col justify-between rounded-lg bg-slate-50 p-2 lg:h-[290px] lg:max-w-[186px] lg:p-4">
      <img
        src={image}
        alt=""
        className="h-[120px] w-full rounded object-cover lg:h-[205px] lg:w-[154px] lg:rounded-md"
      />
      <div className="hidden gap-2 lg:flex">
        {colors.map((color, index, arr) => {
          if (index > 0) {
            if (color.code === arr[index - 1].code) {
              return;
            }
          }

          const colorBlockClass = "aspect-square w-2 lg:w-4 bg-[var(--color)]";

          return (
            <div
              style={{ "--color": color.code }}
              className={colorBlockClass}
              key={index}
            ></div>
          );
        })}
      </div>
      <h1 className="text-xs text-default lg:text-sm">{title}</h1>
    </div>
  );
};

export default Thumbnail;
