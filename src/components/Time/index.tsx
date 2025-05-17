import moment from "moment";
import { eventDate } from "../../constant/common";
import { BsHeartFill } from "react-icons/bs";

import { AddToCalendarButton } from "add-to-calendar-button-react";

const Time = () => {
  const dateFormated = moment(eventDate, "YYYY-MM-DD-HH:mm").format("DD - MM - YYYY");
  return (
    <div className="text-center ">
      <div className="bg-white">
        <h1 className="font-berkshire text-[56px]">Wedding</h1>
        <h1 className="font-berkshire text-[40px]">{dateFormated}</h1>
      </div>

      <div>
        <div className="mt-4 px-4 md:px-0">
          <ul className="border-top border-grow-custom text-grow-custom mx-auto  flex justify-around border-y py-2 font-semibold md:w-3/5">
            <li className="w-[12%] py-1">Thứ 2</li>
            <li className="w-[12%] py-1">Thứ 3</li>
            <li className="w-[12%] py-1">Thứ 4</li>
            <li className="w-[12%] py-1">Thứ 5</li>
            <li className="w-[12%] py-1">Thứ 6</li>
            <li className="w-[12%] py-1">Thứ 7</li>
            <li className="w-[12%] py-1">CN</li>
          </ul>
          <ul className="border-top text-grow-custom mx-auto  flex justify-around py-2 font-semibold md:w-3/5">
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1">1</li>
            <li className="w-[12%] py-1">2</li>
            <li className="w-[12%] py-1">3</li>
            <li className="w-[12%] py-1">4</li>
            <li className="w-[12%] py-1">5</li>
            <li className="w-[12%] py-1">6</li>
          </ul>
          <ul className="border-top text-grow-custom mx-auto  flex justify-around py-2 font-semibold md:w-3/5">
            <li className="w-[12%] py-1">7</li>
            <li className="w-[12%] py-1">8</li>
            <li className="w-[12%] py-1">9</li>
            <li className="w-[12%] py-1">10</li>
            <li className="w-[12%] py-1">11</li>
            <li className="w-[12%] py-1">12</li>
            <li className="w-[12%] rounded-md bg-gray-700 py-1 text-white">13</li>
          </ul>
          <ul className="border-top text-grow-custom mx-auto  flex justify-around py-2 font-semibold md:w-3/5">
            <li className="relative flex w-[12%] items-center justify-center py-1">
              <div className="relative h-fit w-fit">
                <BsHeartFill fontSize={28} fill="#ef4444 " />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                  <span className="text-white">14</span>
                </div>
              </div>
            </li>
            <li className="w-[12%] py-1">15</li>
            <li className="w-[12%] py-1">16</li>
            <li className="w-[12%] py-1">17</li>
            <li className="w-[12%] py-1">18</li>
            <li className="w-[12%] py-1">19</li>
            <li className="w-[12%] py-1">20</li>
          </ul>
          <ul className="border-top text-grow-custom mx-auto  flex justify-around py-2 font-semibold md:w-3/5">
            <li className="w-[12%] py-1">21</li>
            <li className="w-[12%] py-1">22</li>
            <li className="w-[12%] py-1">23</li>
            <li className="w-[12%] py-1">24</li>
            <li className="w-[12%] py-1">25</li>
            <li className="w-[12%] py-1">26</li>
            <li className="w-[12%] py-1 ">27</li>
          </ul>
          <ul className="border-top text-grow-custom mx-auto  flex justify-around border-b py-2 font-semibold md:w-3/5">
            <li className="w-[12%] py-1">28</li>
            <li className="w-[12%] py-1">29</li>
            <li className="w-[12%] py-1">30</li>
            <li className="w-[12%] py-1">31</li>
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1"></li>
          </ul>
          <div className="mt-4 flex items-center justify-center  gap-6">
            <div className="flex items-center gap-2">
              <div className=" w-fit rounded-md bg-gray-700 px-4 py-1.5">
                <span className="font-semibold text-white">13</span>
              </div>
              <div>
                <span className="text-grow-custom font-semibold">Lễ Vu Quy</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className=" w-fit rounded-md bg-red-500 px-4 py-1.5">
                <span className="font-semibold text-white">14</span>
              </div>
              <div>
                <span className="text-grow-custom font-semibold">Lễ Thành Hôn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <AddToCalendarButton
          name="Đám cưới Hữu Anh & Hương Trà"
          startDate="2025-07-14"
          startTime="10:00"
          endDate="2025-07-14"
          endTime="12:00"
          options={["Apple", "Google", "Yahoo", "iCal"]}
          timeZone="Asia/Ho_Chi_Minh"
          label="Thêm vào lịch"
          language="vi"
          description="Gửi những người bạn thân yêu của tôi! Tôi biết các bạn rất bận rộn, bận rộn với công việc, gia đình, cuộc sống … Nhưng tôi hi vọng các bạn sẽ có mặt để chúc mừng tình yêu và hạnh phúc của chúng tôi. Một lần nữa chân thành cảm ơn tất cả các bạn."
        ></AddToCalendarButton>
      </div>
    </div>
  );
};
export default Time;
