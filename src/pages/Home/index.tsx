import { Message, Poster, Time, Address, MessageCongratulation, BankAccount, Album } from "../../components";

const HomePage = () => {
  return (
    <div className="bg-content">
      <Poster />
      <Time />
      <Message />
      <Address />
      <MessageCongratulation />
      <BankAccount />
      <Album />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
