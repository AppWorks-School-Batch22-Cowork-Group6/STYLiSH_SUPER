const Wrapper = ({ children }) => {
    return (
        <div className="bg-gray-400 border-2 border-red-500 mx-auto max-w-[960px] pb-8 xl:pt-[65px] xl:pb-[49px] flex flex-wrap">
            { children }
        </div>
    );
};

export default Wrapper;