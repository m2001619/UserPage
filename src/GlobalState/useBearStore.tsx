import create from "zustand";
import infoArr from "../info.json";
import { InfoArr } from "../Inteface/interface";

interface BearStore {
  infoArr: InfoArr;
}

const useBearStore = create<BearStore>((set) => ({
  infoArr: infoArr,
}));
export default useBearStore;
