import video from "./herbst_version2.mp4";
const Video = () => {
    return (
        <div className="h-full flex flex-col px-8 xl:gap-8 justify-center">
            <video muted autoPlay >
                <source src={ video } type="video/mp4" />
            </video>
            <div className="flex gap-2 xl:gap-4 mt-2 pb-6">
                <div className="flex gap-2 items-center">
                    <button className="text-2xl xl:text-4xl">
                        <ion-icon name="volume-off-outline"></ion-icon>
                    </button>
                    <input type="range" min="0" max="100" step="10" defaultValue="50" className="appearance-none cursor-pointer bg-gray-200 rounded-lg h-2" />
                </div>
                <button className="text-2xl xl:text-4xl">
                    <ion-icon name="play-outline"></ion-icon>
                </button>
                <button className="text-2xl xl:text-4xl">
                    <ion-icon name="pause-outline"></ion-icon>
                </button>
                <button className="text-2xl xl:text-4xl">
                    <ion-icon name="scan-outline"></ion-icon>
                </button>
                <button className="text-2xl xl:text-4xl">
                    <ion-icon name="share-social-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
};

export default Video;