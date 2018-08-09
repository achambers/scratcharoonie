import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';

export default Route.extend({
  store: service(),

  model({ staff_member_id }) {
    return this.store.findRecord('staff-member', staff_member_id)
      .then(model => new Changeset(model));
  },

  actions: {
    willTransition(transition) {
      let { model } = this.controller;

      if (model.get('isDirty')) {
        console.log('Model is dirty. Aborting');
        alert('Ruroh! You have unsaved changes');
        transition.abort();
      } else {
        console.log('Model is clean. Continuing');
      }
    }
  }
});
