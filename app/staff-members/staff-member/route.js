import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model({ staff_member_id }) {
    return this.store.findRecord('staff-member', staff_member_id);
  }
});
