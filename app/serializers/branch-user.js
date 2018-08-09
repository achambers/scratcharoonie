import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalize(typeClass, hash) {
    let { id, version }  = hash.identity;
    let type = hash['@type'];

    hash._phorestMeta = { id, version, type };

    delete hash['@type'];
    delete hash.identity;

    return this._super(typeClass, hash);
  },

  serialize(snapshot, options = {}) {
    let json = this._super(...arguments);

    let _phorestMeta = json._phorestMeta;
    delete json._phorestMeta;

    json['@type'] = _phorestMeta.type;
    json.identity = {
      id: _phorestMeta.id,
      version: _phorestMeta.version
    };

    if (options.includeId) {
      delete json.id;
    }

    return json;
  }
});
