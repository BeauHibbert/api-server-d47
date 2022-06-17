'use strict';

class iModel {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let instance = await this.model.create(json);
      return instance;
    } catch (err) {
        console.error(err);
        return err;
    }
  }

  async read(id, options) {
    try {
      const idNum = parseInt(id);
      let query = { where: { id: idNum }, ...options };

      let result = await this.model.findOne(query);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}