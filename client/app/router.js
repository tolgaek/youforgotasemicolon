import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('githubRepo');
  this.route('pull_request');
  this.route('pullRequest');
});

export default Router;
