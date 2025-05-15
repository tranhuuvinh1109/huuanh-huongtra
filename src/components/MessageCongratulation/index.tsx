import { useState } from "react";
import { ref, push } from "firebase/database";
import toast from "react-hot-toast";
import { db } from "../../provider/Firebase";
// import MessageCard from "./components/MessageCard";
import { Message } from "../../type/common";

const MessageCongratulation = () => {
  const [data, setData] = useState<Message>({
    username: "",
    message: "",
    timestamp: "",
  });
  // const [messageArray, setMessageArray] = useState<Message[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data.username && data.message) {
      try {
        const messagesRef = ref(db, `messages`);
        await push(messagesRef, {
          username: data.username,
          message: data.message,
          timestamp: new Date().toISOString(),
        });
        toast.success("Gửi lời chúc thành công !!!");
        setData({
          username: "",
          message: "",
          timestamp: "",
        });
      } catch (error) {
        toast.error("Gửi lời chúc thất bại !!!");
        console.error("Error sending message:", error);
      }
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin gồm tên và lời chúc !!!");
    }
  };

  // useEffect(() => {
  //   const databaseRef = ref(db, `messages`);

  //   const unsubscribe = onValue(databaseRef, (snapshot) => {
  //     const newData: Message[] = [];

  //     snapshot.forEach((childSnapshot) => {
  //       newData.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val(),
  //       });
  //     });

  //     newData.sort((a, b) => b.timestamp.localeCompare(a.timestamp));

  //     setMessageArray(newData);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  return (
    <div className="flex justify-center">
      <div className="m-6 rounded-lg bg-content-primary md:w-1/3">
        <div className="p-6 ">
          <form onSubmit={handleSubmit} method="post">
            <h1 className="text-center text-2xl ">Sổ lưu bút</h1>
            <h1 className="my-6 text-center text-lg">
              Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến đám cưới của chúng tôi !
            </h1>
            <div>
              <input
                type="text"
                placeholder="Tên của bạn *"
                className="mb-4 w-full rounded-md px-4 py-2"
                value={data.username}
                name="username"
                onChange={handleChange}
              />
              <textarea
                rows={4}
                placeholder="Nhập lời chúc *"
                className="w-full rounded-md px-4 py-2"
                value={data.message}
                name="message"
                onChange={handleChange}
              />
              <div className="mt-6 flex items-center justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-content px-8 py-2 font-semibold text-white hover:bg-content-supper"
                >
                  Gửi lời chúc
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="mb-10 mt-8 max-h-[300px] overflow-y-auto px-6">
        {messageArray?.map((message) => <MessageCard message={message} key={message.id} />)}
      </div> */}
      </div>
    </div>
  );
};

export default MessageCongratulation;
