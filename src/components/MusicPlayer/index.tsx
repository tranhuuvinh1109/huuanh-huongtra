import { useState } from "react";
import { Howl } from "howler";
import { FaPlay, FaPause } from "react-icons/fa6";
import music from "../../assets/musics/nothings.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound] = useState(new Howl({ src: [music] }));

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-12 left-20 ">
      <button className="rounded-full bg-red-400 p-6 text-white hover:text-content-supper" onClick={togglePlay}>
        {isPlaying ? <FaPause fontSize={24} /> : <FaPlay fontSize={24} />}
      </button>
    </div>
  );
};

export default MusicPlayer;
