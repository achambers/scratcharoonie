import DS from 'ember-data';

export default DS.Model.extend({
  branchUser: DS.belongsTo('branch-user', { async: false })
});
