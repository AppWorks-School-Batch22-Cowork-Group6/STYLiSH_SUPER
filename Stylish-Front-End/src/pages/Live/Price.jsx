const Price = ({ hideOnMobile, hideOnDesktop, price }) => {
    const styles =
        hideOnMobile ?
            "hidden xl:block xl:mb-14 xl:text-xl tracking-widest" :
            hideOnDesktop ?
                "xl:hidden tracking-widest ml-4" :
                "";
    return (
        <p className={ styles }>{ `TWD.${price}` }</p>
    );
};


export default Price;