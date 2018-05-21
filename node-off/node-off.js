module.exports = function (RED) {
    function SonoffOff(config) {
        const node = this;
        RED.nodes.createNode(node, config);
        
        node.server = RED.nodes.getNode(config.server);
        const sonoffServer = node.server.sonoffServer;

        node.on('input', function (msg) {
            msg.payload = sonoffServer.turnOffDevice(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("sonoff-off", SonoffOff);
}