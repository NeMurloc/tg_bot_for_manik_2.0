import { makeObservable, observable, action } from 'mobx';

class DataStore {
  jsonData = {};

  constructor() {
    makeObservable(this, {
      jsonData: observable,
      loadJsonData: action,
    });
  }

  loadJsonData(json) {
    this.jsonData = json;
  }
}

const dataStore = new DataStore();

export default dataStore;
