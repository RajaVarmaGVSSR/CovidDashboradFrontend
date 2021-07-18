import { Patient } from "../patient/patient.model";

export class TestReport {
  id: number;
  pid: number;
  testDate: Date;
  resultDate: Date;
  result: string;
  patient: Patient;
}
