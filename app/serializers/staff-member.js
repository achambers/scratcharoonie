import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  extractId(modelClass, resourceHash) {
    return resourceHash.identity.id.split(':')[3];
  }
});
