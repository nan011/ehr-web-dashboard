import { useState, useContext } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Box, Gap, Text, Cloud, Click } from "@components/index";
import { SIZES, COLORS, FONT_WEIGHTS } from "@constants/index";
import { AppContext } from "@contexts/index";
import { FullEHRIcon, TripleBarIcon, OpenedDoorIcon } from "@icons/index";

import { TABS } from "./constants";
import { Spinner } from "./styled";

export default function Dashboard() {
  const appContext = useContext(AppContext);
  const mainAPI = appContext?.apis?.main;
  const user = appContext?.user;
  const setUser = appContext?.setUser;

  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(
    TABS.findIndex(({ endpoint }) => endpoint === router.pathname)
  );

  const tabOnClick = (index, extraFunc) => {
    if (typeof extraFunc === "function") {
      extraFunc();
    }
    setSelectedTabIndex(index);
  };

  const Section = TABS[selectedTabIndex].Section;
  const sectionTitle = TABS[selectedTabIndex].label;

  return (
    <Box height="100vh" width="100vw">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Dashboard</title>
      </Head>
      <Box background={COLORS.RED} direction="column">
        <Box width="100%" mainAxis="center" padding="2.4rem 2rem">
          {isExpanded && (
            <>
              <FullEHRIcon height={40} width={128} />
              <Gap gap={48} />
            </>
          )}
          <Click onClick={() => setIsExpanded(!isExpanded)}>
            <TripleBarIcon side={30} />
          </Click>
        </Box>
        {isExpanded && (
          <>
            <Gap gap={80} />
            <Box padding="0 2rem">
              <Text
                size={SIZES.NORMAL}
                color={COLORS.WHITE}
                weight={FONT_WEIGHTS.REGULAR}
              >
                Menu Utama
              </Text>
            </Box>
          </>
        )}
        <Gap gap={24} />
        {TABS.map(({ Icon, label, endpoint }, index) => {
          const isSelected = index == selectedTabIndex;
          return (
            <Click
              direction="row"
              crossAxis="center"
              key={index}
              padding="1.25rem 0"
              onClick={() => tabOnClick(index, () => router.push(endpoint))}
            >
              <Cloud
                top="0"
                left="0"
                height="100%"
                width="100%"
                direction="row"
                index={0}
              >
                <Box
                  width="100%"
                  height="100%"
                  background={COLORS.DARK_RED}
                  transformOrigin="100% 50%"
                  duration="0.5s"
                  transform={`scaleX(${isSelected ? 1 : 0})`}
                  opacity={0.5}
                />
                <Box
                  width="0.5rem"
                  height="100%"
                  opacity={isSelected ? 1 : 0}
                  duration="0.5s"
                  background={COLORS.WARM_BLUE}
                />
              </Cloud>
              <Box padding="0 2rem">
                <Icon side={32} />
                {isExpanded && (
                  <>
                    <Gap gap={24} />
                    <Text
                      size={SIZES.NORMAL}
                      color={COLORS.WHITE}
                      weight={FONT_WEIGHTS.REGULAR}
                    >
                      {label}
                    </Text>
                  </>
                )}
              </Box>
            </Click>
          );
        })}
        <Click
          direction="row"
          crossAxis="center"
          padding="1.25rem 2rem"
          onClick={async () => {
            setIsLoggingOut(true);
            const response = await mainAPI?.logout();

            if (response.status === 204) {
              setUser(null);
            }

            setIsLoggingOut(false);
          }}
        >
          {isLoggingOut ? (
            <Spinner src="/icons/spinner.svg" height="2rem" />
          ) : (
            <OpenedDoorIcon side={32} />
          )}
          {isExpanded && (
            <>
              <Gap gap={24} />
              <Text
                size={SIZES.NORMAL}
                color={COLORS.WHITE}
                weight={FONT_WEIGHTS.REGULAR}
              >
                Logout
              </Text>
            </>
          )}
        </Click>
      </Box>
      <Box grow={1} direction="column">
        <Box
          padding={`${42 / 16}rem ${48 / 16}rem`}
          width="100%"
          background={COLORS.WHITE}
          mainAxis="between"
        >
          <Text
            color={COLORS.DARK_BLUE}
            size={SIZES.LARGE}
            weight={FONT_WEIGHTS.BOLD}
          >
            {sectionTitle}
          </Text>
          <Box grow={1} />
          <Box>
            <Text
              color={COLORS.WARM_BLACK}
              size={SIZES.NORMAL}
              weight={FONT_WEIGHTS.BOLD}
            >
              {user && user.name && ""}
            </Text>
          </Box>
        </Box>
        <Box background={COLORS.SKY} width="100%" grow={1}>
          <Section />
        </Box>
      </Box>
    </Box>
  );
}
