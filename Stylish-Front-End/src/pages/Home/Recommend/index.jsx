const Recommend = ({ children }) => {
    return (
        <div className="w-full h-[375px] pt-2 px-5 pb-5 bg-gray-300 rounded-md mb-4 flex flex-col relative gap-4 overflow-hidden order-2 xl:order-3 xl:max-w-[1200px] xl:mb-10">
            { children }
        </div>
    );
};

export default Recommend;