import WebitoPlugin from "../src/plugin";

test('adds two numbers correctly', () => {
    const webito = new WebitoPlugin('test')
    const result = webito.registerHook('messagesCreate', () => {
    });
});