import { Message, Poster, Time, Address, MessageCongratulation, BankAccount } from "../../components";

const HomePage = () => {
  return (
    <div className="bg-content">
      <Poster />
      <Time />
      <Message />
      <Address />
      <MessageCongratulation />
      <BankAccount />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
