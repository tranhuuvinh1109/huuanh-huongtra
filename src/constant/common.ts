import QR_HUU_ANH from "../assets/images/qr-huuanh.jpg";
import QR_TRA from "../assets/images/qr-tra.png";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import HuuAnh from "../assets/images/huuanh.png";
import HuongTra from "../assets/images/huongtra.png";

import { BankAccountType, EventType, ImageType } from "../type/common";

const eventDate = "2025-07-14-11:00";

const bankAccountList: BankAccountType[] = [
  {
    bankName: "Vietcombank",
    bankAccountName: "TRAN HUU ANH",
    bankAccountNumber: "0041000350326",
    qrImage: QR_HUU_ANH,
  },
  {
    bankName: "VietinBank",
    bankAccountName: "TRAN THI HUONG TRA",
    bankAccountNumber: "0817014416",
    qrImage: QR_TRA,
  },
];

const imageArray: ImageType[] = [
  {
    url: img1,
  },
  {
    url: img2,
  },
  {
    url: img3,
  },
];

const events: EventType[] = [
  {
    nameEvent: "🎉TIỆC CƯỚI NHÀ GÁI",
    time: "11:00 AM 13/07/2025",
    location: "Thôn Lam Long, Xuân Hải, Nghi Xuân, Hà Tĩnh",
    img: HuongTra,
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d948.0763011818759!2d105.77347310789932!3d18.680757351519485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2sus!4v1746002608838!5m2!1svi!2sus",
    calendar: {
      name: "🎉TIỆC CƯỚI Hương Trà",
      startDate: "2025-07-13",
      startTime: "11:00",
      endDate: "2025-07-13",
      endTime: "12:00",
      timeZone: "Asia/Ho_Chi_Minh",
      label: "Thêm vào lịch",
      language: "vi",
      description: "",
    },
  },
  {
    nameEvent: "🎉TIỆC CƯỚI NHÀ TRAI",
    time: "10:00 AM 14/07/2025",
    location: "Thôn Hợp Thuận, Xuân Phổ, Nghi Xuân, Hà Tĩnh",
    img: HuuAnh,
    urlMap:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d225.24751804675907!2d105.7795561917777!3d18.68865455485863!2m3!1f11.999999999999945!2f21.80051047085431!3f0!3m2!1i1024!2i768!4f35!3m2!1m1!2s!5e1!3m2!1svi!2s!4v1746002443520!5m2!1svi!2s",
    calendar: {
      name: "🎉TIỆC CƯỚI Hữu Anh",
      startDate: "2025-07-14",
      startTime: "10:00",
      endDate: "2025-07-14",
      endTime: "12:00",
      timeZone: "Asia/Ho_Chi_Minh",
      label: "Thêm vào lịch",
      language: "vi",
      description: "",
    },
  },
];

export { eventDate, bankAccountList, imageArray, events };
