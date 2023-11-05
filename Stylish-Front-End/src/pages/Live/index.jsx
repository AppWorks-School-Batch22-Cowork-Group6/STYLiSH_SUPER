import Wrapper from "./Wrapper";
import Video from "./Video";
const Live = () => {
    return (
        <Wrapper>
            <Video />
            <div className="flex gap-4 mt-4">
                <button className="text-2xl">
                    <ion-icon name="volume-off-outline"></ion-icon>
                </button>
                <input type="range" min="0" max="100" step="10" defaultValue="50" />
                <button>
                    <ion-icon name="play-outline"></ion-icon>
                    <ion-icon name="pause-outline"></ion-icon>
                </button>
                <button>
                    <ion-icon name="scan-outline"></ion-icon>
                </button>
                <button>
                    <ion-icon name="share-social-outline"></ion-icon>
                </button>
            </div>
        </Wrapper>
    );
};

export default Live;