import { forwardRef } from 'react';
const Container = forwardRef(({ children }, ref) => {
    return (
        <div className="w-full flex gap-14 xl:gap-10 duration-500 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden 
        xl:[&::-webkit-scrollbar]:hidden" ref={ ref }>
            { children }
        </div>
    );
});

export default Container;