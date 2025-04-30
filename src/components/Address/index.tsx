import HuuAnh from "../../assets/images/huuanh.png";
import HuongTra from "../../assets/images/huongtra.png";
import final from "../../assets/images/final.png";

const Address = () => {
  return (
    <div className="mx-auto mt-10 md:max-w-[1000px]">
      <h1 className="font-playpen mb-6 text-center text-3xl font-semibold text-white">Sự Kiện</h1>
      <div className="p-2">
        <div className="mb-4 flex rounded-md bg-white p-4">
          <img src={HuuAnh} alt="male" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="font-playpen flex flex-1 flex-col items-center justify-center px-4 text-center font-semibold">
            <h4 className="mb-4 text-xl">TIỆC CƯỚI NHÀ NAM</h4>
            <h6>11:00 AM 13/07/2025</h6>
            <h6>Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh</h6>
          </div>
        </div>
        <div className="flex rounded-md bg-white p-4">
          <img src={HuongTra} alt="female" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="font-playpen flex flex-1 flex-col items-center justify-center px-4 text-center font-semibold">
            <h4 className="mb-4 text-xl">TIỆC CƯỚI NHÀ NỮ</h4>
            <h6>11:00 AM 13/07/2025</h6>
            <h6>Thôn Lam Long, Xuân Hải, Nghi Xuân, Hà Tĩnh</h6>
          </div>
        </div>
      </div>
      <div className="mt-6 h-0.5 w-full bg-white" />

      <div className="mt-6 flex rounded-md bg-white p-4">
        <img src={final} alt="final" className="h-[250px] w-[250px] rounded-md object-cover" />
        <div className="font-playpen flex flex-1 flex-col items-center justify-center px-4 text-center font-semibold">
          <h4 className="mb-4 text-xl">Lễ Thành Hôn</h4>
          <h6>11:00 AM 14/07/2025</h6>
          <h6>Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh</h6>
        </div>
      </div>
    </div>
  );
};

export default Address;
