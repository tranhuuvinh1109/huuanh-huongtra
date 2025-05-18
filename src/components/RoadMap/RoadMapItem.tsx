import { AddToCalendarButton } from "add-to-calendar-button-react";
import { EventType } from "../../type/common";
import { GrMapLocation } from "react-icons/gr";
import bg from "../../assets/images/bg_couple.png";
import { forwardRef } from "react";

type RoadMapItemProps = {
  item: EventType;
  classNameContent?: string;
};
const RoadMapItem = forwardRef<HTMLDivElement, RoadMapItemProps>((props, ref) => {
  const { item, classNameContent } = props;

  return (
    <div className={`flex-1 ${classNameContent}`} ref={ref}>
      <div className="flex flex-col gap-4 rounded-md bg-white p-4 sm:flex-row ">
        <div className="relative mx-auto w-[200px] lg:w-[300px] ">
          <div className=" absolute bottom-0 left-0 right-0 top-0">
            <img src={bg} className="w-full animate-spin-slow " />
          </div>
          <img src={item.img} className="w-full rounded-full object-cover p-6" />
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-grow-custom lg:text-xl">{item.nameEvent}</h2>
            <h1 className="text-lg italic lg:text-2xl ">{item.time}</h1>
            <h2>{item.location}</h2>
          </div>
          <div className="mt-6 flex flex-col items-end gap-2">
            <button className="flex items-center gap-2 rounded-full border border-pink-400 px-6 py-2 text-pink-400 hover:border-pink-600 hover:text-pink-600">
              <GrMapLocation fontSize={28} /> <span className="font-semibold">Xem bản đồ</span>
            </button>
            <AddToCalendarButton
              name={item.calendar.name}
              startDate={item.calendar.startDate}
              startTime={item.calendar.startTime}
              endDate={item.calendar.endDate}
              endTime={item.calendar.endTime}
              options={["Apple", "Google", "Yahoo", "iCal"]}
              timeZone="Asia/Ho_Chi_Minh"
              label="Thêm vào lịch"
              language="vi"
              description={item.calendar.description}
            ></AddToCalendarButton>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RoadMapItem;
