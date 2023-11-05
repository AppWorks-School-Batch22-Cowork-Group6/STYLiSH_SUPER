const Controls = ({ names }) => {
    return (
        <div className="flex gap-2 lg:gap-4 mt-2 pb-6 lg:pb-0">
            { names.map((name, index) => {
                return (
                    <button className="text-2xl lg:text-4xl" key={ index }>
                        { name === "volume-off-outline" ?
                            <div className="flex gap-2 items-center" >
                                <ion-icon name={ name }></ion-icon>
                                <input type="range" min="0" max="100" step="10" defaultValue="50" className="appearance-none cursor-pointer bg-gray-200 rounded-lg h-2" />
                            </div> :
                            <ion-icon name={ name }></ion-icon>
                        }
                    </button>
                );
            }) }
        </div>
    );
};

export default Controls;