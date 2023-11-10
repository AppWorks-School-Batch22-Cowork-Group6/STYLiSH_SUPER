import productImg from "../Home/product-main.png";
import Product from "./Product";

const ProductList = () => {
    return (
        <div className="row-start-2 px-8 lg:px-0 mt-6xl:m-0 lg:row-start-1 lg:col-start-2">
            <h3 className="text-xl lg:text-3xl mb-6">熱門商品</h3>
            <ul className="flex flex-col gap-5">
                { Array.from({ length: 3 }, (_, i) => {
                    return (
                        <Product image={ productImg } name="前開衩扭結洋裝" key={ i } price="799" />
                    );
                }) }
            </ul>
        </div>
    );
};

export default ProductList;