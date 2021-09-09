import { useReducer } from "react";

import { Sky } from "@components/index";
import { AppContext } from "@contexts/index";

import Modal from "./components/Modal";
import { modalUpdateHandler } from "./functions";

import "./index.css";

export default function SpecializedApp({ Component, pageProps }) {
  const [modalDataList, modalDispatch] = useReducer(modalUpdateHandler, []);

  const modal = {
    add: (component) => {
      modalDispatch({
        type: "add",
        data: {
          component,
        },
      });
    },
    pop: () => {
      modalDispatch({
        type: "close",
      });
    },
    isEmpty: modalDataList.length === 0,
  };

  const appContextValue = {
    modal,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <Sky
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        index={1}
        clickable={modalDataList.some((modalData) => modalData.isVisible)}
      >
        {modalDataList.map((modalData, index) => (
          <Modal
            key={index}
            isVisible={modalData.isVisible}
            onClose={() => {
              modalDispatch({
                type: "close",
              });
            }}
            onDisappear={() => {
              modalDispatch({
                type: "pop",
              });
            }}
          >
            {modalData.component}
          </Modal>
        ))}
      </Sky>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
