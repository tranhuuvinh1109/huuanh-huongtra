import { Message, Poster, Time, Address, MessageCongratulation } from "../../components";

const HomePage = () => {
  return (
    <div className="bg-content">
      <Poster />
      <Time />
      <Message />
      <Address />
      <MessageCongratulation />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
