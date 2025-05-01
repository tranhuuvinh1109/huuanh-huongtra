import QR_HUU_ANH from "../assets/images/qr-huuanh.jpg";
import { BankAccountType } from "../type/common";

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

export { eventDate, bankAccountList };
