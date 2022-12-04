import React, { useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";

const Modal = ({ showModal, setShowModal, click }) => {
  const modalRef = useRef();

  const animation = useSpring({
    from: {
      duration: 300,
    },

    to: {
      opacity: showModal ? 1 : 0,
      transform: showModal ? `scale(100%)` : `scale(10%)`,
    },
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="w-full h-screen z-40 fixed flex justify-center top-0 right-0 bg-gray-800 bg-opacity-80"
        >
          <animated.div style={animation}>
            <div className="bg-gray-200 dark:bg-dark-primary lg:w-[600px] md:w-[500px] sm:w-[400px] w-[350px] sm:h-fit h-64 relative top-56 rounded-xl">
              <div className="grid grid-cols-2 w-full h-full">
                <div className="col-span-2 sm:h-20 h-9 relative"></div>
                <div className="col-span-2">
                  <h2 className="flex justify-center mb-14 sm:text-2xl text-xl text-gray-600 dark:text-gray-400">
                    آیا برای انجام این کار مطمئن هستید؟
                  </h2>
                  <div className="flex justify-center sm:mb-14 mb-8 sm:text-xl text-lg">
                    <button
                      onClick={() => setShowModal((prev) => !prev)}
                      className="border-2 border-lite-purple px-6 py-2 rounded-lg text-lite-purple mx-2
                    hover:border-red-600 hover:text-red-600 transition ease-in-out duration-300"
                    >
                      خیر !
                    </button>
                    <button
                      onClick={click}
                      type="submit"
                      className="border-2 border-lite-purple bg-lite-purple px-6 py-2 rounded-lg text-white mx-2
                    hover:bg-green-600 hover:border-green-600 hover:text-white transition ease-in-out duration-300"
                    >
                      بله مطمئنم !
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
