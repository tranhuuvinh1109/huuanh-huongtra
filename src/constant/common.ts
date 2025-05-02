import QR_HUU_ANH from "../assets/images/qr-huuanh.jpg";
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
    url: "https://drive.google.com/thumbnail?id=1k32FwA_PXCPKPmFVehA3uMmE70jpPHQI",
  },
  {
    url: "https://drive.google.com/thumbnai?id=1XsJRjZOJFRuKMf9_ESd8y7KnYpcKkHiE",
  },
  {
    url: "https://drive.google.com/thumbnail?id=1k32FwA_PXCPKPmFVehA3uMmE70jpPHQI",
  },
];

export { eventDate, bankAccountList, imageArray };
