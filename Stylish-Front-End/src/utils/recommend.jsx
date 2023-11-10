const recommend = {
    moveToNextSlide: function (ref) {
        if (ref.current) {
            const scrollAmount = ref.current.offsetWidth * 0.2;
            ref.current.scrollLeft += scrollAmount;
        }
    },
    moveToPreviousSlide: function (ref) {
        if (ref.current) {
            const scrollAmount = ref.current.offsetWidth * 0.2;
            ref.current.scrollLeft -= scrollAmount;
        }
    },
};

export default recommend;