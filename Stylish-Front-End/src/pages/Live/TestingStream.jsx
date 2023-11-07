import { useRef } from "react";

function TestingStream() {
  // const [localStream, setLocalStream] = useState(null);
  // const [isVideoShow, setIsVideoShow] = useState(false);
  const videoRef = useRef(null);

  const constraints = {
    audio: true,
    video: true,
  };

  async function hostInit(constraints) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    // setLocalStream(stream);
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    const peer = createPeer();
    stream.getTracks().forEach((track) => peer.addTrack(track, stream));
  }

  function createPeer() {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
      ],
    });
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

    return peer;
  }

  async function handleNegotiationNeededEvent(peer) {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    const payload = {
      sdp: peer.localDescription,
    };

    const { data } = await axios.post("/broadcast", payload);
    const desc = new RTCSessionDescription(data.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
  }

  // const getAudioVideo = () => {
  //   const video = localstream.getVideoTracks();
  //   const audio = localstream.getAudioTracks();

  //   if (video.length > 0) {
  //     console.log(`使用影像裝置 => ${video[0].label}`);
  //   }
  //   if (audio.length > 0) {
  //     console.log(`使用聲音裝置 => ${audio[0].label}`);
  //   }
  // };

  return (
    <div className="mx-auto my-16 flex w-[960px] flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-default">PoLien Testing</h1>
      {/* <div className="flex flex-row items-center justify-between gap-5">
        <button
          onClick={() => {
            hostInit(constraints);
            getAudioVideo();
          }}
          className="h-8 rounded-md bg-lime-300 px-1 text-base"
        >
          host start
        </button>
        <button class="initialBtn h-8 rounded-md bg-yellow-300 px-1 text-base">
          初始化
        </button>

        <button class="joinBtn h-8 rounded-md bg-blue-300 px-1 text-base">
          join room
        </button>

        <button class="btnCall h-8 rounded-md bg-purple-300 px-1 text-base">
          viewer start
        </button>
      </div> */}
      <div className="flex flex-row items-center justify-center gap-16">
        <div className="host flex flex-col items-center justify-start gap-4">
          <button
            onClick={() => {
              hostInit(constraints);
              // getAudioVideo();
            }}
            className="h-8 rounded-md bg-lime-300 px-1 text-base"
          >
            host start
          </button>
          <video
            autoPlay
            playsInline
            ref={videoRef}
            className="h-[240px] w-[320px]"
          ></video>
          <h1 className="text-xl text-default">host</h1>
        </div>

        <div className="viewer flex flex-col items-center justify-start gap-4">
          <button className="h-8 rounded-md bg-purple-300 px-1 text-base">
            viewer start
          </button>
          <video autoPlay playsInline className="h-[240px] w-[320px]"></video>
          <h1 className="text-xl text-default">viewer</h1>
        </div>
      </div>
    </div>
  );
}

export default TestingStream;
