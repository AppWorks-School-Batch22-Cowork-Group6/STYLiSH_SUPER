const Container = ({ children }) => {
    return (
        <div className="w-[200%] flex gap-6">
            { children }
        </div>
    );
};

export default Container;