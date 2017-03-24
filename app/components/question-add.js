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
    addQuestion() {
      var params = {
        questionTitle: this.get('questionTitle'),
        questionBody: this.get('questionBody'),
        author: this.get('author')
      }
      this.set('formOpen', false);
      this.sendAction('addQuestion', params);
    }
  }
});
