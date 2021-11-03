const disabledPlugin = require('./twcPlugins/disabled')

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class',
    separator: ':',
    theme: {
        extend: {},
    },
    variants: {
        borderColor: ['test', 'hover'],
    },
    plugins: [disabledPlugin()],
}
