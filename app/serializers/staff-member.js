import DS from 'ember-data';
import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    branchUser: { embedded: 'always' }
  },

  normalize(typeClass, hash) {
    let { id, version }  = hash.identity;
    let type = hash['@type'];

    hash._phorestMeta = { id, version, type };

    delete hash['@type'];
    delete hash.identity;

    let user = hash.details.user;
    hash.branchUser = user;
    delete hash.details.user;

    return this._super(typeClass, hash);
  },

  serialize(snapshot, options = {}) {
    let json = this._super(...arguments);

    if (!this._isNew(snapshot)) {
      let _phorestMeta = json._phorestMeta;
      delete json._phorestMeta;

      json['@type'] = _phorestMeta.type;
      json.identity = {
        id: _phorestMeta.id,
        version: _phorestMeta.version
      };
    }

    let branchUser = json.branchUser;
    delete json.branchUser;

    json.details = json.details || {};
    json.details.user = branchUser;

    if (options.includeId) {
      delete json.id;
    }

    return json;
  },

  _isNew(snapshot) {
    return !snapshot.id;
  }
});
