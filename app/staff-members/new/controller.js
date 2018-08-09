import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  name: null,

  store: service(),

  actions: {
    save() {
      let branchUser = this.store.createRecord('branch-user', { name: this.name });

      let staffMember = this.store.createRecord('staff-member', { branchUser });

      staffMember.save();
    }
  }
});
