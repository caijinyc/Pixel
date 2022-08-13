import { createForm, FormAtom } from "@atomic-form/core";
import { createContext, useContext } from "react";

class Store<T extends object> {
  form: FormAtom<T>;
  constructor() {
    this.form = createForm({
      initialValue: {},
    });
  }

  // store action
}

const store = new Store();
export const StoreProvider = createContext(store);
export const useStore = () => {
  return useContext(StoreProvider);
};
