import { Message, Poster, Time, Address } from "../../components";

const HomePage = () => {
  return (
    <div className="bg-content">
      <Poster />
      <Time />
      <Message />
      <Address />
      <div className="h-24"></div>
    </div>
  );
};

export default HomePage;
