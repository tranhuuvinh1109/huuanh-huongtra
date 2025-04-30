import { useEffect, useState, useMemo } from "react";
import moment from "moment";
import PosterIMG from "../../assets/images/poster.jpg";
import { eventDate } from "../../constant/common";
const Poster = () => {
  const [countdown, setCountdown] = useState("");

  const renderCountDown = useMemo(() => {
    return (
      <div className="flex items-center justify-center">
        <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-pink-600  font-semibold">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(":")[0]}</h1>
            <h2 className="m-0 text-sm">Days</h2>
          </div>
        </div>
        <div className="ml-4 flex h-[74px] w-[74px] items-center justify-center rounded-full  bg-pink-600 font-semibold">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(":")[1]}</h1>
            <h2 className="m-0 text-sm">Hours</h2>
          </div>
        </div>
        <div className="ml-4 flex h-[74px] w-[74px] items-center justify-center rounded-full  bg-pink-600 font-semibold">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(":")[2]}</h1>
            <h2 className="m-0 text-sm">Minutes</h2>
          </div>
        </div>
        <div className="ml-4 flex h-[74px] w-[74px] items-center justify-center rounded-full  bg-pink-600 font-semibold">
          <div className="text-center">
            <h1 className="m-0 text-lg">{countdown.split(":")[3]}</h1>
            <h2 className="m-0 text-sm">Seconds</h2>
          </div>
        </div>
      </div>
    );
  }, [countdown]);
  useEffect(() => {
    const endDate = moment(eventDate, "YYYY-MM-DD-HH:mm");

    const calculateCountdown = () => {
      const now = moment();
      const duration = moment.duration(endDate.diff(now));

      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setCountdown(`${days}:${hours}:${minutes}:${seconds}`);
    };

    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative  overflow-hidden text-center text-white">
      <div
        className="bg-cover bg-no-repeat md:min-h-[800px] md:min-w-[1500px]"
        style={{
          backgroundImage: `url(${PosterIMG})`,
          backgroundPosition: "50% 60%",
        }}
      ></div>
      <div
        className="absolute left-[50%] top-[50%] z-10 w-full bg-slate-700 py-[500px]"
        style={{
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(to bottom, rgba(245, 246, 252, 0.32), rgba(117, 19, 93, 0.53))",
        }}
      >
        <h1 className="font-ballet mb-4 flex items-center justify-center text-4xl font-semibold tracking-widest">
          Hữu Anh - Hương Trà
        </h1>
        <h1 className="mb-2 text-2xl font-semibold text-white">-We Are Getting Married-</h1>
        <div>
          <p>{renderCountDown}</p>
        </div>
      </div>
    </div>
  );
};

export default Poster;
