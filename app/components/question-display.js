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
    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        questionTitle: this.get('questionTitle'),
        questionBody: this.get('questionBody'),
      };
      this.set('formOpen', false);
      this.sendAction('updateQuestion', question, params);
    },
    deleteQuestion(question) {
      if(confirm("Are you sure you want to delete this question, and not the lack of understanding that holds you in suffering?")) {
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
