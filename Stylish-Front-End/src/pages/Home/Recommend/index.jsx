const Recommend = ({ children, isProductPage }) => {
  const order = !isProductPage ? "order-5" : "order-none";
  const margin = !isProductPage ? "mx-auto" : "mx-5 lg:mx-0 lg:mt-14 lg:-mb-6";
  return (
    <div
      className={`relative mb-4 flex h-[240px] w-4/5 flex-col justify-between gap-2 overflow-hidden rounded-lg bg-gray-100 px-8 py-4 lg:h-[375px] lg:w-full lg:px-10 lg:pb-5 ${order} lg:mx-5 lg:mb-10 ${margin}`}
    >
      {children}
    </div>
  );
};

export default Recommend;
