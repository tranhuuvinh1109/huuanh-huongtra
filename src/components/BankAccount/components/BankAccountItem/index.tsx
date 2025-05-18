import { BankAccountType } from "../../../../type/common";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { MdSaveAlt } from "react-icons/md";
import { RiFullscreenLine } from "react-icons/ri";
import { useState } from "react";

type BankAccountItemProps = {
  bankAccountData: BankAccountType;
  onSelect: (item: BankAccountType) => void;
};

const BankAccountItem = ({ bankAccountData, onSelect }: BankAccountItemProps) => {
  const { bankName, bankAccountName, bankAccountNumber, qrImage } = bankAccountData;
  const [isHovering, setIsHovering] = useState(false);

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
          <h1 className="flex-1 px-4 py-2 text-lg font-medium text-grow-custom">{bankAccountNumber}</h1>
          <div className="absolute right-0 top-0 h-full p-1">
            <button onClick={handleClickCopy} className="h-full rounded-lg bg-white px-3 hover:bg-pink-300">
              <FiCopy />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className="relative overflow-hidden rounded-md hover:cursor-pointer"
          onClick={() => {
            onSelect(bankAccountData);
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img src={qrImage} alt="qr" className="mb-4 w-16  md:w-48" />
          {isHovering && (
            <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-black/60 text-white">
              <div className="block md:hidden">
                <RiFullscreenLine fontSize={24} />
              </div>
              <div className="hidden md:block">
                <RiFullscreenLine fontSize={48} />
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleDownload}
          className="mt-2 flex w-full justify-center rounded-lg bg-content py-1 text-grow-custom hover:bg-pink-400"
        >
          <MdSaveAlt fontSize={20} />
        </button>
      </div>
    </div>
  );
};

export default BankAccountItem;
