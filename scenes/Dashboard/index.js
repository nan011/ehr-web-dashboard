import Head from "next/head";

import { Box, Gap, Text } from "@components/index";
import { SIZES, COLORS, FONT_WEIGHTS } from "@constants/index";
import { FullEHRIcon, TripleBarIcon } from "@icons/index";

import Home from "./components/Home";

export default function Dashboard() {
  return (
    <Box height="100vh" width="100vw">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Dashboard</title>
      </Head>
      <Box padding="2.4rem 2rem" background={COLORS.RED} direction="column">
        <Box width="100%" mainAxis="center">
          <FullEHRIcon height={40} width={128} />
          <Gap gap={48} />
          <TripleBarIcon side={30} />
        </Box>
        <Gap gap={80} />
        <Box grow={1}>
          <Text
            size={SIZES.NORMAL}
            color={COLORS.WHITE}
            weight={FONT_WEIGHTS.REGULAR}
          >
            Menu Utama
          </Text>
        </Box>
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
            Dashboard
          </Text>
          <Box>{/* Profile actions */}</Box>
        </Box>
        <Box background={COLORS.SKY} width="100%" grow={1}>
          <Home />
        </Box>
      </Box>
    </Box>
  );
}
