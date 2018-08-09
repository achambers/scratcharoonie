import DS from 'ember-data';

export default DS.Model.extend({
  _phorestMeta: DS.attr(),

  branchUser: DS.belongsTo('branch-user', { async: false })
});
