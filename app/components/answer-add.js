import Ember from 'ember';

export default Ember.Component.extend({
  formOpen: false,
  actions: {
    addAnswer(question) {
      var params = {
        author: this.get('author'),
        answerTitle: this.get('answerTitle'),
        answerBody: this.get('answerBody'),
        question: this.get('question')
      }
      this.set('formOpen', false);
      this.sendAction('addAnswer', params)
    },
    showForm() {
      this.set('formOpen', true);
    },
    hideForm() {
      this.set('formOpen', false);
    },
    updateQuestion(question) {
      this.sendAction('updateQuestion', question);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
