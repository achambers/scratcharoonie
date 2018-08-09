import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('staff-members', function() {
    this.route('staff-member', { path: ':staff_member_id' });
  });
});

export default Router;
