import alt from '../alt';
import VerblingActions from '../actions/VerblingActions';

class VerblingStore {
  constructor() {
    this.bindActions(VerblingActions);
    this.characters = [];
  }

  onGetSomeSuccess(data) {
    this.characters = data.slice(0, 5);
  }

  onGetSomeFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    // toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(VerblingStore);