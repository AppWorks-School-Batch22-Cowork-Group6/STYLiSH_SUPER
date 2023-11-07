import { useEffect, useRef, useState } from "react";

function TestingStream() {
  const [localStream, setLocalStream] = useState(null);
  const videoRef = useRef(null);

  const constraints = {
    audio: true,
    video: true,
  };

  useEffect(() => {
    async function getLocalStream(constraints) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      setLocalStream(stream);
    }

    getLocalStream(constraints);

    if (videoRef.current) {
      videoRef.current.srcObject = localStream;
    }
  }, []);

  return (
    <>
      <video
        autoPlay
        playsInline
        muted
        ref={videoRef}
        className="h-96 w-96"
      ></video>
    </>
  );
}

export default TestingStream;
