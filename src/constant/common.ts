import QR_HUU_ANH from "../assets/images/qr-huuanh.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

import { BankAccountType, ImageType } from "../type/common";

const eventDate = "2025-07-14-11:00";

const bankAccountList: BankAccountType[] = [
  {
    bankName: "Vietcombank",
    bankAccountName: "TRAN HUU ANH",
    bankAccountNumber: "0041000350326",
    qrImage: QR_HUU_ANH,
  },
  {
    bankName: "MB Bank",
    bankAccountName: "TRAN THI HUONG TRA",
    bankAccountNumber: "1234567890",
    qrImage: QR_HUU_ANH,
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
export { eventDate, bankAccountList, imageArray };
