import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import music from "../../assets/musics/nothings.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleScroll = () => {
    if (hasInteracted || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
        window.removeEventListener("scroll", handleScroll);
      })
      .catch((err) => {
        console.error("Playback failed:", err);
      });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => setHasInteracted(true))
        .catch((err) => console.error("Playback failed:", err));
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasInteracted]);

  return (
    <>
      <div className="fixed bottom-8 left-6 md:bottom-12 md:left-20">
        <button
          className="rounded-full bg-red-400 p-3 text-white hover:text-content-supper md:p-6"
          onClick={togglePlay}
        >
          {isPlaying ? <FaPause fontSize={24} /> : <FaPlay fontSize={24} />}
        </button>
      </div>
      <div className="-z-10 opacity-0">
        <audio ref={audioRef} src={music} preload="auto" loop />
      </div>
    </>
  );
};

export default MusicPlayer;
