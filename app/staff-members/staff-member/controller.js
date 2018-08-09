import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      this.model.save();
    }
  }
});
