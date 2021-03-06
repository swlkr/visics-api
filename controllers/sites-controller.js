const Site = require("../models/site");

const SitesController = {
  routes: function() {
    return [
      { method: "post", url: "/sites", fn: this.create, auth: true },
      { method: "get", url: "/sites", fn: this.list, auth: true },
      { method: "get", url: "/sites/:id", fn: this.show, auth: true }
    ];
  },
  create: function *() {
    this.body = yield Site.create(this.request.body.url, this.state.user);
  },
  list: function *() {
    this.body = yield Site.list(this.state.user.id);
  },
  show: function *(id) {
    this.body = yield Site.graphData(id, this.state.user);
  }
};

module.exports = SitesController;
