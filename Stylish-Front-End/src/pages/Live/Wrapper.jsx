const Wrapper = ({ children }) => {
    return (
        <div className="border-2 border-gray-500 mx-auto max-w-[960px] pb-8 pt-8 xl:pt-[65px] xl:pb-[49px] xl:grid xl:grid-cols-2 xl:grid-rows-2 gap-6">
            { children }
        </div>
    );
};

export default Wrapper;