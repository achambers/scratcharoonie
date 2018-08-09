import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    branchUser: { embedded: 'always' }
  },

  normalize(modelClass, resourceHash) {
    let user = resourceHash.details.user;
    resourceHash.branchUser = user;
    delete resourceHash.details.user;

    return this._super(modelClass, resourceHash);
  }
});
