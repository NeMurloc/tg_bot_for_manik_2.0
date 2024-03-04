import { observable, action, makeObservable } from 'mobx';
import { createContext, useContext } from 'react';

class CheckboxStore {
  checkboxes = {};

  constructor() {
    makeObservable(this, {
      checkboxes: observable,
      toggleCheckbox: action,
      isCheckboxChecked: action
    });
  }

  toggleCheckbox(id) {
    this.checkboxes[id] = !this.checkboxes[id];
  }

  isCheckboxChecked(id) {
    return !!this.checkboxes[id];
  }

  getSelectedCheckboxCount() {
    const values = Object.values(this.checkboxes);
    return values.filter(value => value === true).length;
  }
}

const StoreContext = createContext(new CheckboxStore());

export const useCheckboxStore = () => useContext(StoreContext);

export default StoreContext;
