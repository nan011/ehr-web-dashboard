import { useState, useEffect, useContext } from "react";

import { Box, Text, Gap, Click } from "@components/index";
import { LeftArrowIcon, RightArrowIcon } from "@icons/index";
import { isNone } from "@helpers/utilities";
import { COLORS, SIZES, FONT_WEIGHTS } from "@constants/index";
import { useForm } from "@hooks/index";

import { AppContext } from "@contexts/index";

import Table from "./components/Table";
import Field from "./components/Field";
import { QUERY_TYPES, PATIENT_QUERIES, MAX_ROWS_COUNT } from "./constants";
import { parsePatients } from "./functions";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(null);
  const [queries, setQuery] = useForm(PATIENT_QUERIES);
  const [rows, setRows] = useState([]);
  const appContext = useContext(AppContext);
  const mainAPI = appContext?.apis?.main;
  const isAuthenticated = appContext?.isAuthenticated;

  const changePageNumber = (newPageNumber) => {
    if (newPageNumber > 0 && maxPageNumber && newPageNumber <= newPageNumber) {
      setPageNumber(newPageNumber);
    } else if (isNone(maxPageNumber)) {
      // Force to go page 1 only if no upper bound for the page number
      setPageNumber(1);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const loadPatients = async () => {
      const offset = (pageNumber - 1) * MAX_ROWS_COUNT;
      const limit = offset + MAX_ROWS_COUNT;
      const response = await mainAPI?.getPatients({
        offset,
        limit,
      });

      if (response.status !== 200) {
        // TODO: Handle error
        return;
      }

      const payload = await response.json();

      if (isNone(payload)) {
        // TODO: Handle error
        return;
      }

      const maxPageNumber = Math.ceil(payload.count / MAX_ROWS_COUNT);
      setMaxPageNumber(maxPageNumber);
      setRows(parsePatients(payload.results));
    };
    loadPatients();
  }, [pageNumber, isAuthenticated]);

  return (
    <Box width="100%" height="100%" direction="column">
      <Box padding={`3rem ${48 / 16}rem 0`} direction="column" width="100%">
        <Text
          size={SIZES.NORMAL}
          weight={FONT_WEIGHTS.BOLD}
          color={COLORS.WARM_BLACK}
        >
          Pencarian Data Pasien
        </Text>
        <Gap gap={24} />
        <Box direction="row" crossAxis="center" width="60%">
          <Field
            value={queries.fields[QUERY_TYPES.NIK].value}
            placeholder={QUERY_TYPES.NIK}
            onChange={(value) => setQuery(QUERY_TYPES.NIK, value)}
          />
          <Gap gap={16} />
          <Field
            value={queries.fields[QUERY_TYPES.FULL_NAME].value}
            placeholder={QUERY_TYPES.FULL_NAME}
            onChange={(value) => setQuery(QUERY_TYPES.FULL_NAME, value)}
          />
          <Gap gap={16} />
          <Field
            type="date"
            value={queries.fields[QUERY_TYPES.CHECK_UP_DATETIME].value}
            placeholder={QUERY_TYPES.CHECK_UP_DATETIME}
            onChange={(value) => setQuery(QUERY_TYPES.CHECK_UP_DATETIME, value)}
          />
        </Box>
      </Box>
      <Box padding={`4rem ${48 / 16}rem 0`} direction="column" width="100%">
        <Text
          size={SIZES.NORMAL}
          weight={FONT_WEIGHTS.BOLD}
          color={COLORS.WARM_BLACK}
        >
          Hasil Pencarian
        </Text>
      </Box>
      <Gap gap={24} />
      <Box
        direction="column"
        width="100%"
        background={COLORS.WHITE}
        grow={1}
        shrink={1}
      >
        <Table
          header={["NIK", "Nama Lengkap", "Pemeriksaan Terakhir", "Aksi"]}
          rows={rows}
        />
        <Gap gap={42} />
        <Box
          width="100%"
          direction="row"
          mainAxis="center"
          crossAxis="center"
          grow={1}
          shrink={0}
        >
          <Click
            width="3rem"
            height="3rem"
            radius="0.25rem 0 0 0.25rem"
            background={COLORS.SKY}
            opacity={0.5}
            mainAxis="center"
            crossAxis="center"
            onClick={() => changePageNumber(pageNumber - 1)}
          >
            <LeftArrowIcon side={10} />
          </Click>
          <Box padding="0 1.5rem">
            <Text color={COLORS.BLUE} size={SIZES.REGULAR}>
              Page {pageNumber}
            </Text>
          </Box>
          <Click
            width="3rem"
            height="3rem"
            radius="0 0.25rem 0.25rem 0"
            background={COLORS.SKY}
            opacity={0.5}
            mainAxis="center"
            crossAxis="center"
            onClick={() => changePageNumber(pageNumber + 1)}
          >
            <RightArrowIcon side={10} />
          </Click>
        </Box>
      </Box>
    </Box>
  );
}
