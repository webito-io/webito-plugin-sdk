import WebitoPlugin from "../src/plugin";

test('test', () => {
    const webito = new WebitoPlugin('test')
    const result = webito.registerHook('messagesCreate', () => {
    });
});