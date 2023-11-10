const Recommend = ({ children, isProductPage }) => {
  const order = !isProductPage ? "order-5" : "order-none";
  const margin = !isProductPage
    ? "mx-auto lg:mx-5 lg:mb-10"
    : "mt-4 mx-5 lg:mx-0 lg:mt-14 lg:-mb-6";
  return (
    <div
      className={`relative mb-4 flex h-52 w-full flex-col justify-between gap-1 overflow-hidden rounded-lg bg-gray-100 px-4 py-3 lg:h-[375px] lg:w-full lg:px-10 lg:pb-5 ${order} ${margin}`}
    >
      {children}
    </div>
  );
};

export default Recommend;
