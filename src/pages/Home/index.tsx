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
      <video width="320" height="240" controls autoPlay>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/realtime-cnn.appspot.com/o/video.mp4?alt=media&token=d053a8ad-46c1-4a9d-8f08-846a852f4836"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
      </video>
    </div>
  );
};

export default HomePage;
