import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('toplevel', function() {
    this.route('dynamic', { path: ':super_slug' }, function() {
      this.route('secondlevel', function() {
        this.route('dynamic2', { path: ':duper_slug' });
      });
    });
  });
});

export default Router;
