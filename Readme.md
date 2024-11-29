The Webito Plugin SDK provides a framework for building plugins that can easily integrate with your applications.

## Features

- **Plugin Architecture**: Create modular plugins that can be easily maintained and updated.
- **Event Hooks**: Use event hooks to respond to application events.
- **Asynchronous Support**: Built-in support for asynchronous operations.

## Installation

To install the Webito Plugin SDK, follow these steps:

1. Install package from npm:
   ```bash
   npm install webito-plugin-sdk
   ```

2. Use it in your project:
   ```javascript
   import webito from 'webito-plugin-sdk';
   
   const starter = new webito.WebitoPlugin('yourPluginName');
   ```

## Usage

### Creating a Plugin

To create a new plugin, follow these steps:

```javascript
const starter = new webito.WebitoPlugin('pluginName');

starter.registerHook('hookName', (data) => {
    // Your logic here
});
```

### Executing Hooks

You can execute hooks with the following function:

```javascript
const result = await starter.executeHook('hookName', { data });
```

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
