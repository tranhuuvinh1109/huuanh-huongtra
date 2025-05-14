import {
  Message,
  Poster,
  Time,
  Address,
  MessageCongratulation,
  BankAccount,
  Album,
  Footer,
  MusicPlayer,
} from "../../components";

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
      <Footer />
      <MusicPlayer />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
