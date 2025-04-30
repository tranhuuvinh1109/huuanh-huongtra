import moment from "moment";
import { Message } from "../../../../type/common";

type MessageCardProps = {
  message: Message;
};

const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <div className="mb-4 rounded-lg border bg-white p-4">
      <h3 className="mb-2 border-b p-2 text-xl font-semibold">🎉 {message.username}</h3>
      <p className="font-playpen">{message.message}</p>
      <p className="text-right font-playpen text-xs text-gray-500">
        {moment(message.timestamp).format("DD-MM-YYYY  HH:mm")}
      </p>
    </div>
  );
};
export default MessageCard;
