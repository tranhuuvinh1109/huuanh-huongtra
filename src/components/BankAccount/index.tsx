import { bankAccountList } from "../../constant/common";
import { BankAccountItem } from "./components";

const BankAccount = () => {
  return (
    <div className="grid gap-2 px-6 md:grid-cols-2">
      {bankAccountList.map((bankAccount) => (
        <BankAccountItem key={bankAccount.bankName} bankAccountData={bankAccount} />
      ))}
    </div>
  );
};

export default BankAccount;
