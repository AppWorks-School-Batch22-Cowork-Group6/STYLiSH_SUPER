import { Link } from "react-router-dom";
import Name from "./Name";
import Price from "./Price";

const Product = ({ image, name, price }) => {
    return (
        <li className="flex">
            <img src={ image } alt="" className="w-20 xl:w-28 object-cover" />
            <div className="flex flex-1 ml-2 xl:flex-col xl:ml-4">
                <Name name={ name } />
                <Price hideOnMobile={ true } hideOnDesktop={ false } price={ price } />
            </div>
            <div className="flex flex-col">
                <Price hideOnMobile={ false } hideOnDesktop={ true } price={ price } />
                <Link to="/live" className="mt-auto">
                    <button className="border border-gray-500 bg-black text-white rounded-md px-4 py-2 xl:px-2 xl:py-4 w-28 xl:text-xl">
                        前往購買
                    </button>
                </Link>
            </div>
        </li>
    );
};

export default Product;