import { useState } from "react";

import Head from "next/head";

import { Box, Text, Gap, Button, Click, Cloud } from "@components/index";
import { SIZES, FONT_WEIGHTS, COLORS } from "@constants/index";
import { EHRIcon, EHRWhiteIcon, UserIcon, PadlockIcon } from "@icons/index";
import { useForm } from "@hooks/index";

import Field from "./components/Field";
import {
  GREETING_WORD,
  AFTER_GREETING_WORD,
  WEBSITE_DESCRIPTION,
  TOPBAR_TITLES,
  LOGIN_FORM,
  LOGIN_LABELS,
} from "./constants";
import TopbarTitle from "./components/TopbarTitle";

export default function Home() {
  const [form, setField] = useForm(LOGIN_FORM);
  const [selectedTopbarTitle, setSelectedTobarTitle] = useState(
    TOPBAR_TITLES.LOGIN
  );

  return (
    <Box width="100vw" height="100vh" direction="row">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>EHR Management</title>
      </Head>
      <Box
        grow={1}
        width="50%"
        background="#D54C4C"
        mainAxis="center"
        crossAxis="center"
        direction="column"
      >
        <Cloud
          height="100%"
          width="100%"
          top="0"
          left="0"
          clipPath="polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        >
          <Cloud
            top="0"
            left="0"
            transform="translate(-40%, -40%)"
            clickable={false}
          >
            <EHRWhiteIcon side={600} opacity={0.05} />
          </Cloud>
          <Cloud
            bottom="0"
            right="0"
            transform="translate(30%, 75%)"
            clickable={false}
          >
            <EHRWhiteIcon side={600} opacity={0.05} />
          </Cloud>
        </Cloud>
        <Box direction="column" width="600px">
          <Text
            color="white"
            size={SIZES.SUPER}
            weight={FONT_WEIGHTS.BOLD}
            lineHeight={1.2}
          >
            {GREETING_WORD}
          </Text>
          <Text
            color="white"
            size={SIZES.SUPER}
            weight={FONT_WEIGHTS.BOLD}
            lineHeight={1.2}
          >
            {AFTER_GREETING_WORD}
          </Text>
          <Gap gap={24} />
          <Text
            color="white"
            size={SIZES.MEDIUM}
            weight={FONT_WEIGHTS.REGULAR}
            lineHeight={1.4}
          >
            {WEBSITE_DESCRIPTION}
          </Text>
        </Box>
      </Box>
      <Box
        grow={1}
        width="50%"
        padding="3rem 10rem"
        direction="column"
        height="100%"
        crossAxis="center"
      >
        <Box width="100%" direction="row" mainAxis="end">
          <TopbarTitle
            name={TOPBAR_TITLES.LOGIN}
            onClick={() => setSelectedTobarTitle(TOPBAR_TITLES.LOGIN)}
            shouldHighlight={selectedTopbarTitle === TOPBAR_TITLES.LOGIN}
          />
          <Gap gap={52} />
          <TopbarTitle
            name={TOPBAR_TITLES.REGISTER}
            onClick={() => setSelectedTobarTitle(TOPBAR_TITLES.REGISTER)}
            shouldHighlight={selectedTopbarTitle === TOPBAR_TITLES.REGISTER}
          />
          <Gap gap={52} />
          <TopbarTitle
            name={TOPBAR_TITLES.CALL_US}
            onClick={() => setSelectedTobarTitle(TOPBAR_TITLES.CALL_US)}
            shouldHighlight={selectedTopbarTitle === TOPBAR_TITLES.CALL_US}
          />
        </Box>
        <Box
          direction="column"
          mainAxis="center"
          crossAxis="center"
          height="100%"
          width="420px"
        >
          <EHRIcon side={64} />
          <Gap gap={20} />
          <Text size={SIZES.RARE} weight={FONT_WEIGHTS.BOLD}>
            Masuk
          </Text>
          <Gap gap={48} />
          <Field
            type="text"
            label={LOGIN_LABELS.EMAIL}
            onChange={(newEmail) => setField(LOGIN_LABELS.EMAIL, newEmail)}
            Icon={UserIcon}
          />
          <Gap gap={48} />
          <Field
            type="password"
            label={LOGIN_LABELS.PASSWORD}
            onChange={(newPassword) =>
              setField(LOGIN_LABELS.PASSWORD, newPassword)
            }
            Icon={PadlockIcon}
          />
          <Gap gap={48} />
          <Button
            name="Masuk"
            type={Button.Type.Red}
            width="100%"
            canClickByEnter={true}
          />
          <Gap gap={36} />
          <Box direction="row" mainAxis="center" crossAxis="center">
            <Text
              size={SIZES.SMALL}
              weight={FONT_WEIGHTS.REGULAR}
              color={COLORS.WARM_BLACK}
            >
              Lupa password?
            </Text>
            <Gap gap={4} />
            <Click>
              <Text
                size={SIZES.SMALL}
                weight={FONT_WEIGHTS.BOLD}
                color={COLORS.WARM_BLACK}
                decoration="underline"
              >
                Reset
              </Text>
            </Click>
          </Box>
          <Gap gap={48} />
          <Box width="100%" height="1px" background={COLORS.LIGHT_BLUE} />
          <Gap gap={48} />
          <Text
            size={SIZES.SMALL}
            weight={FONT_WEIGHTS.REGULAR}
            color={COLORS.WARM_BLACK}
          >
            Belum punya akun?
          </Text>
          <Gap gap={20} />
          <Button
            name="Buat akun baru"
            type={Button.Type.Transparent}
            width="100%"
          />
        </Box>
      </Box>
    </Box>
  );
}
