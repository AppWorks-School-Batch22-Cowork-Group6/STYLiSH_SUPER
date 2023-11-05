import video from "./herbst_version2.mp4";
import Controls from "./Controls";

const Video = () => {
    return (
        <div className="h-full flex flex-col px-8 xl:gap-8 justify-center">
            <video muted autoPlay className="h-full bg-black px-10 xl:px-0">
                <source src={ video } type="video/mp4" />
            </video>
            <Controls names={ ["volume-off-outline", "play-outline", "pause-outline", "scan-outline", "share-social-outline"] } />
        </div>
    );
};

export default Video;