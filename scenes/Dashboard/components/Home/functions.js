import moment from "moment";

export function parsePatients(patients) {
  return patients.map((patient) => [
    patient.nik,
    patient.nik,
    patient.account.name,
    moment(new Date(patient.updated_at)).format("DD MMMM YYYY"),
  ]);
}
