import video from "./herbst_version2.mp4";
const Video = () => {
    return (
        <div className="bg-black h-full flex px-8 justify-center">
            <video muted autoPlay >
                <source src={ video } type="video/mp4" />
            </video>
        </div>
    );
};

export default Video;