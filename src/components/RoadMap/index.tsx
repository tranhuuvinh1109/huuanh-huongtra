import { AddToCalendarButton } from "add-to-calendar-button-react";
import bg from "../../assets/images/bg_couple.png";
import { events } from "../../constant/common";
import { GrMapLocation } from "react-icons/gr";

const RoadMap = () => {
  return (
    <div className="my-12 flex  pl-10 lg:justify-center lg:pl-0">
      <div className="relative h-[700px] w-1 bg-grow-custom">
        <>
          <div className="absolute  left-[-12px]  top-4  h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom"></div>
          <div className=" absolute left-full  top-4 pl-6 pr-0 lg:right-full lg:pr-10">
            <div className="flex w-[280px] flex-col gap-4 rounded-md bg-white p-4 md:flex-row">
              <div className="relative w-[200px] md:w-[300px] ">
                <div className=" absolute bottom-0 left-0 right-0 top-0">
                  <img src={bg} className="w-full animate-spin-slow " />
                </div>
                <img src={events[0].img} className="w-full rounded-full object-cover p-6" />
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-grow-custom">{events[0].nameEvent}</h2>
                  <h1 className="text-2xl italic ">{events[0].time}</h1>
                  <h2>{events[0].location}</h2>
                </div>
                <div className="mt-6 flex flex-col items-end gap-2">
                  <button className="flex items-center gap-2 rounded-full border border-pink-400 px-6 py-2 text-pink-400 hover:border-pink-600 hover:text-pink-600">
                    <GrMapLocation fontSize={28} /> <span className="font-semibold">Xem bản đồ</span>
                  </button>
                  <AddToCalendarButton
                    name={events[0].calendar.name}
                    startDate={events[0].calendar.startDate}
                    startTime={events[0].calendar.startTime}
                    endDate={events[0].calendar.endDate}
                    endTime={events[0].calendar.endTime}
                    options={["Apple", "Google", "Yahoo", "iCal"]}
                    timeZone="Asia/Ho_Chi_Minh"
                    label="Thêm vào lịch"
                    language="vi"
                    description={events[0].calendar.description}
                  ></AddToCalendarButton>
                </div>
              </div>
            </div>
          </div>
        </>
        {/* <>
          <div className="absolute  left-[-12px]  top-[360px]  h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom"></div>
          <div className="absolute left-full  top-[360px] pl-10">
            <div className="flex gap-4 rounded-md bg-white p-4">
              <div className="relative w-[300px]  ">
                <div className=" absolute bottom-0 left-0 right-0 top-0">
                  <img src={bg} className="w-full animate-spin-slow " />
                </div>
                <img src={events[1].img} className="w-full rounded-full object-cover p-6" />
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-semibold text-grow-custom">{events[1].nameEvent}</h2>
                  <h1 className="text-2xl italic ">{events[1].time}</h1>
                  <h2>{events[1].location}</h2>
                </div>
                <div className="mt-6 flex flex-col items-end gap-2">
                  <button className="flex items-center gap-2 rounded-full border border-pink-400 px-6 py-2 text-pink-400 hover:border-pink-600 hover:text-pink-600">
                    <GrMapLocation fontSize={28} /> <span className="font-semibold">Xem bản đồ</span>
                  </button>
                  <AddToCalendarButton
                    name={events[1].calendar.name}
                    startDate={events[1].calendar.startDate}
                    startTime={events[1].calendar.startTime}
                    endDate={events[1].calendar.endDate}
                    endTime={events[1].calendar.endTime}
                    options={["Apple", "Google", "Yahoo", "iCal"]}
                    timeZone="Asia/Ho_Chi_Minh"
                    label="Thêm vào lịch"
                    language="vi"
                    description={events[1].calendar.description}
                  ></AddToCalendarButton>
                </div>
              </div>
            </div>
          </div>
        </> */}
      </div>
    </div>
  );
};

export default RoadMap;
