import { useRef } from "react";

const Host = () => {
  const hostVideoRef = useRef(null);

  const constraints = {
    audio: true,
    video: true,
  };

  //  以下是host的部分
  async function hostInit(constraints) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    // setLocalStream(stream);
    if (hostVideoRef.current) {
      hostVideoRef.current.srcObject = stream;
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

    const { data } = await axios.post(
      "https://joazen.website/broadcast",
      payload,
    );
    const desc = new RTCSessionDescription(data.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
  }

  return (
    <div className="mx-auto my-16 flex w-[960px] flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-default">Be a Host!</h1>
      <div className="flex flex-row items-center justify-center gap-16">
        <div className="host flex flex-col items-center justify-start gap-4">
          <button
            onClick={() => {
              hostInit(constraints);
              console.log("host button click");
            }}
            className="h-8 rounded-md bg-lime-300 px-1 text-base"
          >
            start streaming
          </button>
          <video
            autoPlay
            playsInline
            ref={hostVideoRef}
            className="h-[240px] w-[320px]"
          ></video>
          <h1 className="text-xl text-default">host</h1>
        </div>
      </div>
    </div>
  );
};

export default Host;
