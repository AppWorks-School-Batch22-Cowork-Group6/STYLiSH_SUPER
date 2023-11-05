const Wrapper = ({ children }) => {
    return (
        <div className="mx-auto max-w-[960px] pb-8 pt-10 lg:pt-[65px] lg:pb-[49px] lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6">
            { children }
        </div>
    );
};

export default Wrapper;