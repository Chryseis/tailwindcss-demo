const disabledPlugin = require('./twcPlugins/disabled')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class',
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
