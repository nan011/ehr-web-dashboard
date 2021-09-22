import { useState } from "react";
import Datetime from "react-datetime";
import NumberFormat from "react-number-format";
import moment from "moment";
import "moment/locale/id";

import { Box, Click } from "@components/index";
import { DownArrowIcon } from "@icons/index";
import { COLORS } from "@constants/index";
import "react-datetime/css/react-datetime.css";

import { DATE_FORMAT } from "./contants";
import * as Styled from "./styled";

moment.updateLocale("id", {
  weekdaysMin: ["M", "S", "S", "R", "K", "J", "S"],
});

export default function Field({
  value = "",
  type = "text",
  placeholder = "",
  onChange = () => {},
}) {
  const [dateIsOpened, setDateIsOpened] = useState(false);

  if (type === "date") {
    return (
      <Click radius="0.25rem" background={COLORS.WHITE} width="100%">
        <Styled.CustomDatetime>
          <Datetime
            inputProps={{
              placeholder,
              disabled: false,
            }}
            renderInput={(props) => (
              <NumberFormat
                {...props}
                format={DATE_FORMAT.replace(/[^\/]/g, "#")}
                mask={DATE_FORMAT.replace(/\//g, "").split("")}
              />
            )}
            dateFormat="DD/MM/YYYY"
            timeFormat={false}
            onOpen={() => setDateIsOpened(true)}
            onClose={() => setDateIsOpened(false)}
            onChange={(moment) => onChange(moment.toDate())}
            closeOnClickOutside={() => setDateIsOpened(false)}
          />
        </Styled.CustomDatetime>
        <Box grow={1} />
        <Box
          transform={`rotateZ(${dateIsOpened ? 0 : -90}deg)`}
          margin="0 1rem 0 0"
        >
          <DownArrowIcon height={16} width={16} />
        </Box>
      </Click>
    );
  }

  return (
    <Styled.Input
      placeholder={placeholder}
      value={value}
      onChange={(element) => {
        onChange(element.target.value);
      }}
    />
  );
}
