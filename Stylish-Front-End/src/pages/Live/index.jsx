import Wrapper from "./Wrapper";
import Video from "./Video";
const Live = () => {
    return (
        <Wrapper>
            <Video />
            <div className="flex gap-4">
                <button>
                    volume
                    <input type="range" min="0" max="100" step="10" defaultValue="50" />
                </button>
                <button>play</button>
                <button>full screen</button>
                <button>share</button>
            </div>
        </Wrapper>
    );
};

export default Live;