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
  FloatingHeart,
  Invite,
} from "../../components";

const HomePage = () => {
  return (
    <div className="relative bg-content">
      <FloatingHeart />
      <Poster />
      <Time />
      <Message />
      <Address />
      <MessageCongratulation />
      <BankAccount />
      <Album />
      <Invite />
      <Footer />
      <MusicPlayer />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
