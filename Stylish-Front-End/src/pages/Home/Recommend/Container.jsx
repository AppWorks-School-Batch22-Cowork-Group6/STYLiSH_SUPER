import { forwardRef } from "react";
const Container = forwardRef(({ children }, ref) => {
  return (
    <div
      className="flex w-full gap-4 overflow-x-auto scroll-smooth duration-500 lg:gap-[38px] [&::-webkit-scrollbar]:hidden 
        lg:[&::-webkit-scrollbar]:hidden"
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Container;
