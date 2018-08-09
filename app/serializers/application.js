import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractId(modelClass, resourceHash) {
    return resourceHash._phorestMeta.id.split(':')[3];
  }
});
