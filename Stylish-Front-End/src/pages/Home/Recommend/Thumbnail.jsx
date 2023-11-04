import productImg from "../product-main.png";
const Thumbnail = () => {
    return (
        <div className="bg-slate-50 px-9 xl:px-7 py-3 rounded-lg shrink-0">
            <img src={ productImg } alt="" className="w-full h-[250px] object-cover rounded-md" />
            <div className="flex gap-2 mt-3">
                <div className="aspect-square w-4 bg-green-500"></div>
                <div className="aspect-square w-4 bg-green-500"></div>
                <div className="aspect-square w-4 bg-green-500"></div>
            </div>
        </div>
    );
};

export default Thumbnail;