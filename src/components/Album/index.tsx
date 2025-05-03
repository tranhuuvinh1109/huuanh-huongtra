import { imageArray } from "../../constant/common";

const Album = () => {
  // const [listImage, setListImage] = useState<string[]>([]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     try {
  //       const folderRef = ref(storage, "wedding");
  //       const res = await listAll(folderRef);

  //       const urlPromises = res.items.map((itemRef) => getDownloadURL(itemRef));
  //       const urls = await Promise.all(urlPromises);

  //       setListImage(urls);
  //     } catch (error) {
  //       console.error("Error fetching images: ", error);
  //     }
  //   };

  //   fetchImages();
  // }, []);

  return (
    <div className="mt-10 grid grid-cols-3 gap-4 px-6">
      {imageArray.map((item, index) => (
        <div key={index} className="mb-4 w-full overflow-hidden">
          <img src={item.url} alt={`image-${index}`} className="w-full rounded-md" />
        </div>
      ))}
    </div>
  );
};

export default Album;
