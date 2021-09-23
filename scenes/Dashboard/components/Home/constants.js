import moment from "moment";

export const QUERY_TYPES = {
  NIK: "NIK",
  FULL_NAME: "Nama Lengkap",
  CHECK_UP_DATETIME: "Tanggal Pemeriksaan",
};

export const PATIENT_QUERIES = [
  {
    label: QUERY_TYPES.NIK,
    type: "text",
    getParameter: (value) => ({ nik: value }),
  },
  {
    key: "name",
    label: QUERY_TYPES.FULL_NAME,
    type: "text",
    getParameter: (value) => ({ name: value }),
  },
  {
    key: "updated_at",
    label: QUERY_TYPES.CHECK_UP_DATETIME,
    type: "date",
    getParameter: (value) => ({
      updated_at: moment(value).format("DD/MM/YYYY"),
    }),
  },
];

export const MAX_ROWS_COUNT = 10;
