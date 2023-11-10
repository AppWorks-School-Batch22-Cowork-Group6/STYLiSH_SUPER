import { useRef, useState } from "react";
import { haha } from "./sdp";

function TestingStream() {
  const [hostSdp, setHostSdp] = useState(haha);
  const [viewerSdp, setViewerSdp] = useState(null);
  const [viewerPeer, setViewerPeer] = useState(null);

  const viewerVideoRef = useRef(null);

  //  以下是viewer的部分
  async function viewerInit() {
    const peer = await viewerCreatePeer();
    console.log(peer);
    peer.addTransceiver("video", { direction: "recvonly" });
    setViewerPeer(peer);
  }

  async function viewerCreatePeer() {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
      ],
    });
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleViewerNegotiationNeededEvent(peer);
    return peer;
  }

  async function handleViewerNegotiationNeededEvent(peer) {
    if (hostSdp) {
      const answer = await peer.createAnswer();
      console.log("answer", answer);
      const testing = await peer.setLocalDescription(answer);
      console.log("testing", testing);
      const payload = {
        sdp: peer.localDescription,
      };
      setViewerSdp(payload.sdp);
    }
  }

  function handleTrackEvent(e) {
    if (viewerVideoRef.current) {
      viewerVideoRef.current.srcObject = e.streams[0];
    }
  }

  return (
    <div className="mx-auto my-16 flex w-[960px] flex-col items-center justify-center gap-5">
      <h1 className="text-3xl text-default">Watching Streaming!</h1>
      <div className="flex flex-row items-center justify-center gap-16">
        <div className="viewer flex flex-col items-center justify-start gap-4">
          <button
            className="h-8 rounded-md bg-purple-300 px-1 text-base"
            onClick={() => {
              viewerInit();
              console.log("viewer button click");
            }}
          >
            viewer start
          </button>
          <video
            autoPlay
            playsInline
            className="h-[240px] w-[320px]"
            ref={viewerVideoRef}
          ></video>
          <h1 className="text-xl text-default">viewer</h1>
        </div>
      </div>
    </div>
  );
}

export default TestingStream;
