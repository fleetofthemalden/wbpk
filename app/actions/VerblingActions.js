import alt from '../alt';

class VerblingActions {
  constructor() {
    this.generateActions(
      'getSomeSuccess',
      'getSomeFail'
    );
  }

  getSomeStuff() {
    // $.ajax({ url: '/api/pathname' })
    //   .done((data) => {
    //     this.actions.getSomeSuccess(data)
    //   })
    //   .fail((jqXhr) => {
    //     this.actions.getSomeFail(jqXhr)
    //   });
  }
}

export default alt.createActions(VerblingActions);