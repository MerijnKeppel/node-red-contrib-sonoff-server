module.exports = function (RED) {
    function SonoffState(config) {
        const node = this;
        RED.nodes.createNode(node, config);
        
        node.server = RED.nodes.getNode(config.server);
        const sonoffServer = node.server.sonoffServer;

        node.on('input', function (msg) {
            msg.payload = sonoffServer.getDeviceState(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("sonoff-get", SonoffState);
}