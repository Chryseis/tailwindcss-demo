const disabledPlugin = require('./twcPlugins/disabled')

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class',
    separator: ':',
    theme: {
        extend: {},
    },
    variants: {
        color: ['test'],
        fontSize: ['test', 'hover'],
    },
    plugins: [disabledPlugin()],
}
