import { useState } from "react";

import { Box, Text, Gap, Click } from "@components/index";
import { LeftArrowIcon, RightArrowIcon } from "@icons/index";
import { isNone } from "@helpers/utilities";
import { COLORS, SIZES, FONT_WEIGHTS } from "@constants/index";
import { useForm } from "@hooks/index";

import Table from "./components/Table";
import TextField from "./components/TextField";
import { QUERY_TYPES, PATIENT_QUERIES } from "./constants";

export default function Home() {
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(null);
  const [queries, setQuery] = useForm(PATIENT_QUERIES);

  const changePageNumber = (newPageNumber) => {
    if (newPageNumber > 0 && maxPageNumber && newPageNumber <= newPageNumber) {
      setPageNumber(newPageNumber);
    } else if (isNone(maxPageNumber)) {
      // Force to go page 1 only if no upper bound for the page number
      setPageNumber(1);
    }
  };

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
          <TextField
            value={queries.fields[QUERY_TYPES.NIK].value}
            placeholder={QUERY_TYPES.NIK}
            onChange={(value) => setQuery(QUERY_TYPES.NIK, value)}
          />
          <Gap gap={16} />
          <TextField
            value={queries.fields[QUERY_TYPES.FULL_NAME].value}
            placeholder={QUERY_TYPES.FULL_NAME}
            onChange={(value) => setQuery(QUERY_TYPES.FULL_NAME, value)}
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
          rows={[
            [
              "3260101930001",
              "3260101930001",
              "Adrian Pangestu",
              "30 November 2020",
            ],
            [
              "3260101930002",
              "3260101930002",
              "Adrian Pangestu",
              "30 November 2020",
            ],
            [
              "3260101930003",
              "3260101930003",
              "Adrian Pangestu",
              "30 November 2020",
            ],
            [
              "3260101930004",
              "3260101930004",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930005",
              "3260101930005",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930006",
              "3260101930006",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930007",
              "3260101930007",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930008",
              "3260101930008",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930009",
              "3260101930009",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
            [
              "3260101930010",
              "3260101930010",
              "Nandhika Prayoga",
              "20 November 1999",
            ],
          ]}
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
