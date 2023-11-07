const Wrapper = ({ children }) => {
  return (
    <div className="mx-auto max-w-[960px] gap-6 pb-8 pt-10 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:pb-[49px] lg:pt-[65px]">
      {children}
    </div>
  );
};

export default Wrapper;
