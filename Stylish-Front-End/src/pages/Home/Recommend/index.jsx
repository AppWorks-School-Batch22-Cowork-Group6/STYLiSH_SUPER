const Recommend = ({ children, isProductPage }) => {
    const order = !isProductPage ? 'order-5' : 'order-none';
    const margin = !isProductPage ? 'mx-auto' : 'mx-5 xl:mx-0 xl:mt-14 xl:-mb-6';
    return (
        <div className={ `w-4/5 xl:w-full h-[240px] xl:h-[375px] py-2 px-8 xl:px-10 xl:pb-5 bg-gray-300 rounded-md mb-4 flex flex-col relative gap-4 overflow-hidden ${order} xl:mx-5 xl:mb-10 ${margin}` }>
            { children }
        </div>
    );
};

export default Recommend;