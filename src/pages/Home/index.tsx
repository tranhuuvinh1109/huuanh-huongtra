import {
  Message,
  Poster,
  Time,
  Address,
  MessageCongratulation,
  BankAccount,
  Album,
  VideoIntro,
  Footer,
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
      <Footer />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
