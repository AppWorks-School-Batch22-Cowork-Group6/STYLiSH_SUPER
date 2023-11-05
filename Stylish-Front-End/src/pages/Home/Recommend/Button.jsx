const Button = ({ position, onMoveToPrev, onMoveToNext }) => {
  const buttonPosition = position === "left" ? "-left-2" : "-right-2";
  const buttonPath =
    position === "left"
      ? "M15.75 19.5L8.25 12l7.5-7.5"
      : "M8.25 4.5l7.5 7.5-7.5 7.5";
  return (
    <button
      className={`absolute top-1/2 h-12 w-12 -translate-y-1/2 lg:h-14 lg:w-14 ${buttonPosition} z-10`}
      onClick={position === "left" ? onMoveToPrev : onMoveToNext}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gray"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={buttonPath} />
      </svg>
    </button>
  );
};

export default Button;
