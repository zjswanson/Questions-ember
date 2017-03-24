# Ember Questions

Ember Questions is a message board utility built to demonstrate concepts in Ember JS.  It has a structure similar to Yahoo Answers, in which a user can post a question, and others can post answers to that question.  The following ember features are used: routing, templating, components, data stores, and data relationships.

## Development Process

1. Routing Structure:
  index: App landing page will display a list of all questions by title and author.  Each entry links to the route for that specific questions.  Index also includes a form for adding new questions to the list.  (required components: question add form, short-form display for questions)
  Questions (dynamic route): Each question entry will have it's own route that displays the full details of the question and will allow users to post an answer.  Route will have controls to edit and delete the question, and each answer will have controls to edit and delete as well. (components: Question Detail display, question edit form, question delete button, answer add form, answer edit form, answer delete button)
2. Models:
  Question:
    questionTitle, author, questionBody, answers(relationship property)
  Answer:
    author, answerBody, AnswerTitle, upvoteScore (maybe), question(relationship property)
3. Design:
  See attached sketches (in project root folder) for design wireframes.
4. Wish list:
  Planning to start with basic CRUD for both models, and a reasonably good display.  If there's spare time and energy, add: ranking for answers, animation/dynamism to styling, custom coloring, figure out how to sort returns from the model hook, media queries to list behavior.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd questions`
* `npm install`
* `bower install`


## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
