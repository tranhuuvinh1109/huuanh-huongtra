import { useEffect, useRef } from "react";

const VideoIntro = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });

      const timeout = setTimeout(() => {
        video.muted = false;
        video.play().catch((err) => {
          console.warn("Play after unmute failed:", err);
        });
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="px-6 py-10">
      <video ref={videoRef} className="w-full rounded-md" controls autoPlay muted playsInline>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/realtime-cnn.appspot.com/o/video.mp4?alt=media&token=d053a8ad-46c1-4a9d-8f08-846a852f4836"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoIntro;
