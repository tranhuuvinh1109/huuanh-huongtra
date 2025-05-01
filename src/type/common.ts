export type Message = {
  id?: string;
  username: string;
  message: string;
  timestamp: string;
};

export type BankAccountType = {
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  qrImage: string;
};
