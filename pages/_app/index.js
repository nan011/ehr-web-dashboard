import { useState, useReducer, useEffect } from "react";

import { Sky } from "@components/index";
import { AppContext } from "@contexts/index";
import { createMainAPI } from "@api/index";
import { isNone } from "@helpers/utilities";

import Modal from "./components/Modal";
import { modalUpdateHandler } from "./functions";

import "./index.css";

export default function SpecializedApp({ Component, pageProps }) {
  const [modalDataList, modalDispatch] = useReducer(modalUpdateHandler, []);
  const [user, setUser] = useState({});

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
    apis: {
      main: createMainAPI(user?.token),
    },
    isAuthenticated: !isNone(user?.token),
    user,
    setUser: (user) => {
      window.localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    if (!isNone(user)) {
      setUser(user);
    }
  }, []);

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
