const Container = ({ children, position }) => {
    return (
        <div className={ `w-[200%] flex gap-6 duration-500` } style={ { transform: `translateX(${position}%)` } }>
            { children }
        </div>
    );
};

export default Container;