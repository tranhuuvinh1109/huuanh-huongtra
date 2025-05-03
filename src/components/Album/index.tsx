import { useEffect, useRef } from "react";
import { imageArray } from "../../constant/common";

const Album = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner") as HTMLUListElement;
      const scrollerContent = Array.from(scrollerInner.children) as HTMLElement[];

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute("aria-hidden", "true");
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }
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
    <div className="mt-24 flex items-center justify-center	">
      <div ref={scrollerRef} className="scroller mx-auto my-auto max-w-[1280px]" data-speed="slow">
        <ul className="tag-list scroller__inner">
          {imageArray.map((item, index) => {
            return (
              <li key={index} className="relative min-h-[250px] w-[250px]">
                <img src={item.url} alt={`image-${index}`} className="z-10" style={{ objectFit: "cover" }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Album;
