const Button = ({ position }) => {
    const buttonPosition = position === 'left' ? '-left-4' : '-right-4';
    const buttonPath = position === 'left' ? 'M15.75 19.5L8.25 12l7.5-7.5' : 'M8.25 4.5l7.5 7.5-7.5 7.5';
    return (
        <button className={ `absolute w-14 h-14 top-1/2 -translate-y-1/2 ${buttonPosition}` }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="gray">
                <path strokeLinecap="round" strokeLinejoin="round" d={ buttonPath } />
            </svg>
        </button>
    );
};

export default Button;