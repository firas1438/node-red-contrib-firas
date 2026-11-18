module.exports = function (RED) {
  function FirasNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on("input", function (msg) {
      msg.payload = "Firas";
      node.send(msg);
    });
  }
  RED.nodes.registerType("firas", FirasNode);
};
