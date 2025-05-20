import {
  Message,
  Poster,
  Time,
  MessageCongratulation,
  BankAccount,
  Album,
  Footer,
  MusicPlayer,
  FloatingHeart,
  Invite,
  RoadMap,
} from "../../components";

const HomePage = () => {
  return (
    <div className="relative bg-content ">
      <FloatingHeart />
      <Poster />
      <Time />
      <RoadMap />
      <Message />
      <BankAccount />
      <Album />
      <MessageCongratulation />
      <Invite />
      <Footer />
      <MusicPlayer />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
