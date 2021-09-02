export const QUERY_TYPES = {
  NIK: "NIK",
  FULL_NAME: "Nama Lengkap",
  CHECK_UP_DATETIME: "Tanggal Pemeriksaan",
};

export const PATIENT_QUERIES = [
  {
    label: QUERY_TYPES.NIK,
    type: "text",
  },
  {
    label: QUERY_TYPES.FULL_NAME,
    type: "text",
  },
  {
    label: QUERY_TYPES.CHECK_UP_DATETIME,
    type: "date",
  },
];
