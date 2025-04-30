import moment from "moment";
import { eventDate } from "../../constant/common";

const Time = () => {
  const dateFormated = moment(eventDate, "YYYY-MM-DD-HH:mm").format("DD - MM - YYYY");
  return (
    <div className="text-center ">
      <div className="bg-white">
        <h1 className="font-berkshire text-[56px]">Wedding</h1>
        <h1 className="font-berkshire text-[40px]">{dateFormated}</h1>
      </div>

      <div>
        <div className="mt-4">
          <ul className="border-top mx-auto flex  w-3/5 justify-around border-y py-2 font-semibold text-white">
            <li className="w-[12%] py-1">Thứ 2</li>
            <li className="w-[12%] py-1">Thứ 3</li>
            <li className="w-[12%] py-1">Thứ 4</li>
            <li className="w-[12%] py-1">Thứ 5</li>
            <li className="w-[12%] py-1">Thứ 6</li>
            <li className="w-[12%] py-1">Thứ 7</li>
            <li className="w-[12%] py-1">CN</li>
          </ul>
          <ul className="border-top mx-auto flex  w-3/5 justify-around py-2 font-semibold text-white">
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1">1</li>
            <li className="w-[12%] py-1">2</li>
            <li className="w-[12%] py-1">3</li>
            <li className="w-[12%] py-1">4</li>
            <li className="w-[12%] py-1">5</li>
            <li className="w-[12%] py-1">6</li>
          </ul>
          <ul className="border-top mx-auto flex  w-3/5 justify-around py-2 font-semibold text-white">
            <li className="w-[12%] py-1">7</li>
            <li className="w-[12%] py-1">8</li>
            <li className="w-[12%] py-1">9</li>
            <li className="w-[12%] py-1">10</li>
            <li className="w-[12%] py-1">11</li>
            <li className="w-[12%] py-1">12</li>
            <li className="w-[12%] py-1">13</li>
          </ul>
          <ul className="border-top mx-auto flex  w-3/5 justify-around py-2 font-semibold text-white">
            <li className="w-[12%] rounded-md bg-gray-700 py-1">14</li>
            <li className="w-[12%] py-1">15</li>
            <li className="w-[12%] py-1">16</li>
            <li className="w-[12%] py-1">17</li>
            <li className="w-[12%] py-1">18</li>
            <li className="w-[12%] py-1">19</li>
            <li className="w-[12%] py-1">20</li>
          </ul>
          <ul className="border-top mx-auto flex  w-3/5 justify-around py-2 font-semibold text-white">
            <li className="w-[12%] py-1">21</li>
            <li className="w-[12%] py-1">22</li>
            <li className="w-[12%] py-1">23</li>
            <li className="w-[12%] py-1">24</li>
            <li className="w-[12%] py-1">25</li>
            <li className="w-[12%] py-1">26</li>
            <li className="w-[12%] py-1 ">27</li>
          </ul>
          <ul className="border-top mx-auto flex  w-3/5 justify-around border-b py-2 font-semibold text-white">
            <li className="w-[12%] py-1">28</li>
            <li className="w-[12%] py-1">29</li>
            <li className="w-[12%] py-1">30</li>
            <li className="w-[12%] py-1">31</li>
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1"></li>
            <li className="w-[12%] py-1"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Time;
