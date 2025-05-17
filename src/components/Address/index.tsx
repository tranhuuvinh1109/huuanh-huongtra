import { AddToCalendarButton } from "add-to-calendar-button-react";
import final from "../../assets/images/final.png";
import bg from "../../assets/images/bg_couple.png";
import { events } from "../../constant/common";

const Address = () => {
  return (
    <div className="mx-auto mt-10 font-montserrat md:max-w-[1000px] ">
      <h1 className="mb-6 text-center font-playpen text-3xl font-semibold text-grow-custom">Sự Kiện</h1>

      <div className="flex flex-col justify-between gap-4  p-2 md:flex-row">
        {events.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center rounded-md bg-white p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-full max-w-[400px] ">
                  <div className=" absolute bottom-0 left-0 right-0 top-0">
                    <img src={bg} className="animate-spin-slow w-full " />
                  </div>
                  <img src={item.img} className="w-full rounded-full object-cover p-6" />
                </div>
                <h1 className="mb-4 mt-6 text-2xl ">{item.nameEvent}</h1>
                <h1 className="mb-4 text-xl font-semibold">{item.time}</h1>
                <h1 className="mb-4 text-base">{item.location}</h1>
              </div>
              <iframe
                src={item.urlMap}
                width="200"
                height="200"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="mt-6">
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
          );
        })}
      </div>
      <div className="mt-6 h-0.5 w-full bg-white" />

      <div className="p-2">
        <div className="mt-6 flex flex-col items-center gap-4 rounded-md bg-white p-4 md:flex-row md:gap-0">
          <img src={final} alt="final" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="flex flex-1 flex-col items-center justify-center px-4 text-center font-semibold">
            <h4 className="mb-4 text-xl">Lễ Thành Hôn </h4>
            <h6>11:00 AM 14/07/2025</h6>
            <h6>Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
