import { bankAccountList } from "../../constant/common";
import { BankAccountItem } from "./components";

const BankAccount = () => {
  return (
    <div>
      <h1 className="my-4 text-center font-semibold text-white">Những yêu thương phương xa xin gửi về</h1>
      <div className="grid gap-2 px-6 md:grid-cols-2">
        {bankAccountList.map((bankAccount) => (
          <BankAccountItem key={bankAccount.bankName} bankAccountData={bankAccount} />
        ))}
      </div>
    </div>
  );
};

export default BankAccount;
