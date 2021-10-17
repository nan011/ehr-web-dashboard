import { useState, useReducer, useEffect, useMemo } from "react";
import { useRouter } from "next/router";

import { Sky } from "@components/index";
import { AppContext } from "@contexts/index";
import { createMainAPI } from "@api/index";
import { isNone, isObject } from "@helpers/utilities";

import Modal from "./components/Modal";
import { modalUpdateHandler } from "./functions";

import "./index.css";

export default function SpecializedApp({ Component, pageProps }) {
  const [modalDataList, modalDispatch] = useReducer(modalUpdateHandler, []);
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const router = useRouter();

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

  const mainAPI = useMemo(() => createMainAPI(user?.token), [user?.token]);

  const appContextValue = {
    modal,
    apis: {
      main: mainAPI,
    },
    isAuthenticated: !isNone(user?.token),
    user: {
      ...(isObject(user) ? user : {}),
      ...(isObject(account) ? account : {}),
    },
    setUser: (user) => {
      window.localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    },
  };

  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    if (!isNone(user)) {
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    if (isNone(user)) {
      router.push("/");
    } else {
      const retrieveAccount = async () => {
        const response = await mainAPI.getAccount();

        if (response.status === 401) {
          setUser(null);
          return;
        }

        if (response.status !== 200) {
          // Show error if not success
          return;
        }

        const data = await response.json();

        setAccount(data);
      };

      retrieveAccount();
    }
  }, [user]);

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
