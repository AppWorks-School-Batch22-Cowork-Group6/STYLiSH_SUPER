import productImg from "../Home/product-main.png";
import { Link } from "react-router-dom";
const ProductList = () => {
    return (
        <div className="row-start-2 px-8 xl:px-0 mt-6xl:m-0 xl:row-start-1 xl:col-start-2">
            <h3 className="text-2xl xl:text-3xl mb-6 xl:mb-3">熱門商品</h3>
            <ul className="flex flex-col gap-5">
                <li className="flex">
                    <img src={ productImg } alt="" className="w-20 xl:w-28 object-cover" />
                    <div className="flex flex-1 ml-2 xl:flex-col xl:ml-4">
                        <p className="mt-0 mb-8 xl:text-2xl leading-none">前開衩扭結洋裝</p>
                        <p className="hidden xl:block xl:mb-14 xl:text-xl tracking-widest">TWD.799</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="xl:hidden tracking-widest ml-4">TWD.799</p>
                        <Link to="/live" className="mt-auto">
                            <button className="border border-gray-500 bg-black text-white rounded-md px-4 py-2 xl:px-2 xl:py-4 w-28 xl:text-xl">
                                前往購買
                            </button>
                        </Link>
                    </div>
                </li>
                <li className="flex">
                    <img src={ productImg } alt="" className="w-20 xl:w-28 object-cover" />
                    <div className="flex flex-1 ml-2 xl:flex-col xl:ml-4">
                        <p className="mt-0 mb-8 xl:text-2xl leading-none">前開衩扭結洋裝</p>
                        <p className="hidden xl:block xl:mb-14 tracking-widest xl:text-xl">TWD.799</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="xl:hidden tracking-widest ml-4">TWD.799</p>
                        <Link to="/live" className="mt-auto">
                            <button className="border border-gray-500 bg-black text-white rounded-md px-4 py-2 w-28 xl:px-2 xl:py-4 xl:text-xl">
                                前往購買
                            </button>
                        </Link>
                    </div>
                </li>
                <li className="flex">
                    <img src={ productImg } alt="" className="w-20 xl:w-28 object-cover" />
                    <div className="flex flex-1 ml-2 xl:flex-col xl:ml-4">
                        <p className="mt-0 mb-8 xl:text-2xl leading-none">前開衩扭結洋裝</p>
                        <p className="hidden xl:block xl:mb-14 tracking-widest xl:text-xl">TWD.799</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="xl:hidden tracking-widest ml-4">TWD.799</p>
                        <Link to="/live" className="mt-auto">
                            <button className="border border-gray-500 bg-black text-white rounded-md px-4 py-2 xl:px-2 xl:py-4 w-28 xl:text-xl">
                                前往購買
                            </button>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProductList;