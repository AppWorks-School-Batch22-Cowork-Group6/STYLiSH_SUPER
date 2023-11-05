import video from "./herbst_version2.mp4";
const Video = () => {
    return (
        <div className="bg-black h-full flex justify-center px-16 xl:px-40">
            <video muted autoPlay >
                <source src={ video } type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;