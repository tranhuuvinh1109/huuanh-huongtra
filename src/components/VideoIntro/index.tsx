import { useEffect, useRef } from "react";

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Autoplay error:", err);
        });
      }
    };

    playVideo();

    document.body.addEventListener("scroll", playVideo);
    document.body.addEventListener("click", playVideo);

    return () => {
      document.body.removeEventListener("scroll", playVideo);
      document.body.removeEventListener("click", playVideo);
    };
  }, []);

  return (
    <div className="px-6 py-10">
      <video ref={videoRef} className="w-full rounded-md" controls autoPlay>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/realtime-cnn.appspot.com/o/video.mp4?alt=media&token=d053a8ad-46c1-4a9d-8f08-846a852f4836"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoIntro;
