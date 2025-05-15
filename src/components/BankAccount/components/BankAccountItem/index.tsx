import { BankAccountType } from "../../../../type/common";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { MdSaveAlt } from "react-icons/md";

type BankAccountItemProps = {
  bankAccountData: BankAccountType;
};

const BankAccountItem = ({ bankAccountData }: BankAccountItemProps) => {
  const { bankName, bankAccountName, bankAccountNumber, qrImage } = bankAccountData;

  const handleClickCopy = () => {
    navigator.clipboard.writeText(bankAccountNumber);
    toast.success("Đã copy số tài khoản");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = `${bankAccountName}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex gap-4 rounded-lg bg-white p-4">
      <div className="flex flex-1 flex-col gap-2">
        <h1>{bankName}</h1>
        <h1>{bankAccountName}</h1>
        <div className="relative flex items-center justify-between rounded-lg bg-content">
          <h1 className="flex-1 px-4 py-2 text-lg font-medium text-white">{bankAccountNumber}</h1>
          <div className="absolute right-0 top-0 h-full p-1">
            <button onClick={handleClickCopy} className="h-full rounded-lg bg-white px-3 hover:bg-gray-300">
              <FiCopy />
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={qrImage} alt="qr" className="mb-4 w-16 rounded-md md:w-48" />
        <button
          onClick={handleDownload}
          className="flex w-full justify-center rounded-lg bg-content py-1 text-white hover:bg-gray-700"
        >
          <MdSaveAlt fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default BankAccountItem;
