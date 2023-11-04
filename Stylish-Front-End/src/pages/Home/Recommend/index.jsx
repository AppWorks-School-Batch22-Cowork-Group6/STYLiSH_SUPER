const Recommend = ({ children, isProductPage }) => {
    const order = !isProductPage ? 'order-5' : 'order-none';
    const margin = !isProductPage ? 'm-0' : 'm-5 xl:mx-0 xl:mt-14 xl:-mb-6';
    return (
        <div className={ `w-full h-[375px] pt-2 px-5 pb-5 bg-gray-300 rounded-md mb-4 flex flex-col relative gap-4 overflow-hidden ${order} xl:max-w-[1200px] xl:mb-10 ${margin}` }>
            { children }
        </div>
    );
};

export default Recommend;