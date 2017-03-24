import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash ({
      question: this.store.findRecord('question', params.question_id, {include: 'answers'})
    });
  },
  actions: {
    addAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionToRoute('question', question);
    },
    deleteQuestion(question) {
      var review_deletions = question.get('answers').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
          if(params[key]!== undefined) {
            question.set(key,params[key]);
          }
        });
        question.save();
        this.transitionToRoute('question', question);
    },
    deleteAnswer(answer, question) {
      answer.destroyRecord();
      transitionToRoute('question', question);
    },
    updateAnswer(answer, question, params) {
      Object.keys(params).forEach(function(key) {
          if(params[key]!== undefined) {
            answer.set(key,params[key]);
          }
        });
        answer.save();
        this.transitionToRoute('question', question);
    }
  }

});
