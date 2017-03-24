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
        
      }
    }
  }
});
