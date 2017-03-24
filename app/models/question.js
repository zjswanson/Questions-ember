import DS from 'ember-data';

export default DS.Model.extend({
  questionTitle: DS.attr(),
  questionBody: DS.attr(),
  author: DS.attr(),
  answers: DS.attr(),
});
