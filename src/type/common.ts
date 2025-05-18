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

export type ImageType = {
  id?: string;
  url: string;
};

export type EventType = {
  nameEvent: string;
  time: string;
  location: string;
  urlMap: string;
  externalMap: string;
  calendar: CalendarItemType;
  img: string;
};

export type CalendarItemType = {
  name: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  timeZone: string;
  label: string;
  language: string;
  description: string;
};
