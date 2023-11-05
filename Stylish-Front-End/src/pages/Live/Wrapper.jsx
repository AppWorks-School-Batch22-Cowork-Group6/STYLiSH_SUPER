const Wrapper = ({ children }) => {
    return (
        <div className="border-2 border-gray-500 mx-auto max-w-[960px] pb-8 xl:pt-[65px] xl:pb-[49px] flex flex-wrap">
            { children }
        </div>
    );
};

export default Wrapper;