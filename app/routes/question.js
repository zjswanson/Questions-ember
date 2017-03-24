import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    Ember.RSVP.hash ({
      question: this.store.findRecord('question', params.question_id, {include: 'answers'})
    });
  }
});
