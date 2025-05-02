import HuuAnh from "../../assets/images/huuanh.png";
import HuongTra from "../../assets/images/huongtra.png";
import final from "../../assets/images/final.png";

const Address = () => {
  return (
    <div className="mx-auto mt-10 md:max-w-[1000px]">
      <h1 className="mb-6 text-center font-playpen text-3xl font-semibold text-white">Sự Kiện</h1>
      <div className="p-2">
        <div className="mb-4 flex flex-col items-center gap-6 rounded-md bg-white p-4 md:flex-row md:gap-0">
          <img src={HuuAnh} alt="male" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-1 flex-col items-center justify-center px-4 text-center font-playpen font-semibold">
              <h4 className="mb-4 text-xl">TIỆC CƯỚI NHÀ NAM</h4>
              <h6>11:00 AM 13/07/2025</h6>
              <h6>Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh</h6>
            </div>
            <div className="hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d225.24751804675907!2d105.7795561917777!3d18.68865455485863!2m3!1f11.999999999999945!2f21.80051047085431!3f0!3m2!1i1024!2i768!4f35!3m2!1m1!2s!5e1!3m2!1svi!2s!4v1746002443520!5m2!1svi!2s"
                width="200"
                height="200"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="block md:hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d225.24751804675907!2d105.7795561917777!3d18.68865455485863!2m3!1f11.999999999999945!2f21.80051047085431!3f0!3m2!1i1024!2i768!4f35!3m2!1m1!2s!5e1!3m2!1svi!2s!4v1746002443520!5m2!1svi!2s"
                width="120"
                height="120"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col items-center gap-6 rounded-md bg-white p-4 md:flex-row md:gap-0">
          <img src={HuongTra} alt="female" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-1 flex-col items-center justify-center px-4 text-center font-playpen font-semibold">
              <h4 className="mb-4 text-xl">TIỆC CƯỚI NHÀ NỮ</h4>
              <h6>11:00 AM 13/07/2025</h6>
              <h6>Thôn Lam Long, Xuân Hải, Nghi Xuân, Hà Tĩnh</h6>
            </div>
            <div className="hidden md:block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.0763011818759!2d105.77347310789932!3d18.680757351519485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2sus!4v1746002608838!5m2!1svi!2sus"
                width="200"
                height="200"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="block md:hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.0763011818759!2d105.77347310789932!3d18.680757351519485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2sus!4v1746002608838!5m2!1svi!2sus"
                width="120"
                height="120"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 h-0.5 w-full bg-white" />

      <div className="p-2">
        <div className="mt-6 flex flex-col items-center gap-4 rounded-md bg-white p-4 md:flex-row md:gap-0">
          <img src={final} alt="final" className="h-[250px] w-[250px] rounded-md object-cover" />
          <div className="flex flex-1 flex-col items-center justify-center px-4 text-center font-playpen font-semibold">
            <h4 className="mb-4 text-xl">Lễ Thành Hôn</h4>
            <h6>11:00 AM 14/07/2025</h6>
            <h6>Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
