import DS from 'ember-data';

export default DS.Model.extend({
  _phorestMeta: DS.attr(),

  name: DS.attr('string')
});
