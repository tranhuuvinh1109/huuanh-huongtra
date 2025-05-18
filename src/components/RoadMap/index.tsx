import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { events } from "../../constant/common";
import RoadMapItem from "./RoadMapItem";
import Modal from "../Modal";

const RoadMap = () => {
  const itemFirstRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const [urlMap, setUrlMap] = useState<string>();

  const classNameSecondItem = useMemo(() => {
    return `${height + 24}px`;
  }, [height]);

  const handleClickOpenMap = useCallback((url: string) => {
    setUrlMap(url);
  }, []);

  const handleCloseModal = useCallback(() => {
    setUrlMap(undefined);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      const element = itemFirstRef.current;
      if (element) {
        setHeight(element.clientHeight);
      }
    };
    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div className="mt-24">
        <h1 className="mb-6 text-center font-playpen text-3xl font-semibold text-grow-custom">Sự Kiện</h1>
        <div className="my-12 flex w-full justify-start gap-6 overflow-hidden px-6 sm:justify-center">
          <div className="relative block w-1 bg-grow-custom lg:hidden">
            <div className="absolute  left-[-12px]  top-4  h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom"></div>
            <div
              className={`absolute  left-[-12px]   h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom`}
              style={{
                top: classNameSecondItem,
              }}
            ></div>
          </div>
          <div className="block flex-1 lg:hidden">
            <RoadMapItem
              item={events[0]}
              classNameContent="pt-4 flex-1"
              ref={itemFirstRef}
              onClickOpenMap={handleClickOpenMap}
            />
            <RoadMapItem item={events[1]} classNameContent="pt-4" onClickOpenMap={handleClickOpenMap} />
          </div>

          <div className="hidden flex-1 gap-10 lg:flex lg:justify-center">
            <RoadMapItem item={events[0]} classNameContent="pt-4" onClickOpenMap={handleClickOpenMap} />
            <div className="relative hidden h-[700px] w-1 bg-grow-custom sm:block">
              <div className="absolute  left-[-12px]  top-4  h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom"></div>
              <div className="absolute  left-[-12px]  top-[360px]  h-6  w-6 translate-x-[2px] rounded-full  bg-grow-custom"></div>
            </div>
            <RoadMapItem item={events[1]} classNameContent="pt-[360px]" onClickOpenMap={handleClickOpenMap} />
          </div>
        </div>
      </div>
      <Modal isOpen={!!urlMap} onClose={handleCloseModal}>
        <div className="">
          <div className="block md:hidden">
            <iframe
              src={urlMap}
              width="300"
              height="300"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="hidden md:block">
            <iframe
              src={urlMap}
              width="500"
              height="500"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RoadMap;
