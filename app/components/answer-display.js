import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer, question) {
      if(confirm("Have you discovered that the only path to enlightment lies in rejecting the answers of others?")) {
        this.sendAction('deleteAnswer', answer, question)
      }
    }
  }
});
