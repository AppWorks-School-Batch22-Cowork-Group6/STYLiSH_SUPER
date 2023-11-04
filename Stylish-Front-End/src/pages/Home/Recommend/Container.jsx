const Container = ({ children, position }) => {
    return (
        <div className="w-full flex gap-6 duration-500 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden 
        xl:[&::-webkit-scrollbar]:hidden" style={ { transform: `translateX(${position}%)` } }>
            { children }
        </div>
    );
};

export default Container;