import productImg from "../Home/product-main.png";
import { Link } from "react-router-dom";
const ProductList = () => {
    return (
        <div>
            <h3 className="text-lg">熱門商品</h3>
            <ul>
                <li>
                    <img src={ productImg } alt="" className="w-32 object-cover" />
                    <p>Product Name</p>
                    <p>NT$ 999</p>
                    <Link to="/live">前往購買</Link>
                </li>
                <li>
                    <img src={ productImg } alt="" className="w-32 object-cover" />
                    <p>Product Name</p>
                    <p>NT$ 999</p>
                    <Link to="/live">前往購買</Link>
                </li>
                <li>
                    <img src={ productImg } alt="" className="w-32 object-cover" />
                    <p>Product Name</p>
                    <p>NT$ 999</p>
                    <Link to="/live">前往購買</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProductList;