import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaUpload } from "react-icons/fa6";
import { uploadImageToFirebase } from "../../provider/Firebase";

const AdminPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAddImage = async () => {
    if (image) {
      setIsLoading(true);
      const url = await uploadImageToFirebase(image);
      console.log(url);
      setIsLoading(false);
      setImage(null);
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  return (
    <div>
      <h1>ADMIN PAGE</h1>
      <div className="flex items-start gap-2 rounded-md bg-content px-6 py-4">
        {image ? (
          <div className="relative w-fit">
            <button
              onClick={handleDeleteImage}
              className="absolute right-2 top-2 rounded-full border border-content bg-content text-white"
            >
              <IoClose fontSize={24} />
            </button>
            <img src={URL.createObjectURL(image)} alt="preview" className="w-96" />
          </div>
        ) : (
          <div className="flex h-96 w-96 items-center justify-center rounded-md border">
            {isLoading ? (
              <div className="flex animate-spin items-center justify-center text-white">
                <AiOutlineLoading3Quarters fontSize={48} />
              </div>
            ) : (
              <label htmlFor="image" className="flex flex-col items-center gap-2 text-sm font-medium text-white">
                <FaUpload fontSize={48} /> Upload Image
              </label>
            )}
          </div>
        )}
        <input type="file" id="image" className="hidden" onChange={handleImageChange} />
        <button disabled={isLoading} className="rounded-md bg-white px-6 py-1" onClick={handleAddImage}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
