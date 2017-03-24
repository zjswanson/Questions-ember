import Ember from 'ember';

export default Ember.Component.extend({
  formOpen: false,
  actions: {
    showForm() {
      this.set('formOpen', true);
    },
    hideForm() {
      this.set('formOpen', false);
    },
    updateAnswer(answer, question, params) {
      params = {
        answerTitle: this.get('answerTitle'),
        answerBody: this.get('answerBody'),
        author: this.get('author')
      };
      this.set('formOpen', false);
      this.sendAction('updateAnswer',answer, question, params);
    },
    deleteAnswer(answer, question) {
      if(confirm("Have you discovered that the only path to enlightment lies in rejecting the answers of others?")) {
        this.sendAction('deleteAnswer', answer, question);
      }
    }
  }
});
