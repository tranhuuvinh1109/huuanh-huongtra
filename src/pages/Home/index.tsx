import {
  Message,
  Poster,
  Time,
  Address,
  MessageCongratulation,
  BankAccount,
  Album,
  VideoIntro,
} from "../../components";

const HomePage = () => {
  return (
    <div className="bg-content">
      <Poster />
      <VideoIntro />
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
