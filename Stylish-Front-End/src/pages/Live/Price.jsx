const Price = ({ hideOnMobile, hideOnDesktop, price }) => {
    const styles =
        hideOnMobile ?
            "hidden lg:block lg:mb-14 lg:text-xl tracking-widest" :
            hideOnDesktop ?
                "lg:hidden tracking-widest ml-4" :
                "";
    return (
        <p className={ styles }>{ `TWD.${price}` }</p>
    );
};


export default Price;