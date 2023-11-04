const Container = ({ children, position }) => {
    const translatePosition = `translate-x-[${position}%]`;
    return (
        <div className={ `w-[200%] flex gap-6 ${translatePosition} duration-500` }>
            { children }
        </div>
    );
};

export default Container;