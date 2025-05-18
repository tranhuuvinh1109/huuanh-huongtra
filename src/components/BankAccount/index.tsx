import { useCallback, useState } from "react";
import { bankAccountList } from "../../constant/common";
import { BankAccountItem } from "./components";
import { BankAccountType } from "../../type/common";
import Modal from "../Modal";

const BankAccount = () => {
  const [itemSelected, setItemSelected] = useState<BankAccountType>();

  const handleClose = useCallback(() => {
    setItemSelected(undefined);
  }, []);

  const handleSelect = useCallback((item: BankAccountType) => {
    setItemSelected(item);
  }, []);

  return (
    <>
      <div className="mt-24">
        <h1 className="my-4 text-center text-xl font-semibold text-grow-custom md:text-3xl">
          Những yêu thương phương xa xin gửi về
        </h1>
        <div className="grid gap-2 px-6 md:grid-cols-2">
          {bankAccountList.map((bankAccount) => (
            <BankAccountItem key={bankAccount.bankName} bankAccountData={bankAccount} onSelect={handleSelect} />
          ))}
        </div>
      </div>
      <Modal isOpen={!!itemSelected} onClose={handleClose}>
        <div className="w-[300px] md:w-[400px] ">
          <img src={itemSelected?.qrImage} />
        </div>
      </Modal>
    </>
  );
};

export default BankAccount;
