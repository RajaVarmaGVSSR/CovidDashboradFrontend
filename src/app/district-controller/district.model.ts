import { State } from "../state.model";

export interface District {
  id: number;
  name: string;
  total: number;
  recovered: number;
  active: number;
  state: State;
  deceased: number;
}
