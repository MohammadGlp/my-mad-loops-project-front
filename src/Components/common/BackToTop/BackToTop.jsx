import { useEffect, useState } from "react";
import { TiArrowUpThick } from "react-icons/ti";

const BackToTop = () => {
  const [strokeDashOffset, setstrokeDashOffset] = useState("1000");
  const [showTopBtn, setShowTopBtn] = useState(false);

  const hideAndShow = () => {
    if (window.scrollY > 100) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  };

  const drawCircleOnScroll = () => {
    const percentageComplete =
      (document.documentElement.scrollTop /
        (document.documentElement.offsetHeight - window.innerHeight)) *
      30;
    const newUnit = 1000;
    const offsetUnit = percentageComplete * (newUnit / 100);
    setstrokeDashOffset(newUnit - offsetUnit);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scroll = () => {
    window.addEventListener("scroll", () => {
      hideAndShow();
      drawCircleOnScroll();
    });
  };

  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      {showTopBtn && (
        <>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="52px"
            height="50px"
            viewBox="0 0 130 130"
            enableBackground="new 0 0 130 130"
            xmlSpace="preserve"
            className="fixed bottom-[15px] left-[19px] rotate-180 cursor-pointer z-[998]"
            onClick={goToTop}
          >
            <path
              fill="transparent"
              stroke="#7F56DA"
              className="gauge-path"
              style={{ strokeDashoffset: strokeDashOffset }}
              d="M83,99.916c-24.806,0-44.916-20.109-44.916-44.916
		c0-24.806,20.109-44.917,44.916-44.917c24.807,0,44.916,20.11,44.916,44.917C127.916,79.807,107.807,99.916,83,99.916z"
            />
          </svg>

          <TiArrowUpThick
            className="w-6 h-6 fixed bottom-[23px] left-[26px] cursor-pointer z-[999] text-lite-purple"
            onClick={goToTop}
          />
        </>
      )}
    </>
  );
};

export default BackToTop;
