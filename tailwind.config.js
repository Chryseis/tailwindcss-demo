const disabledPlugin = require('./twcPlugins/disabled')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,css}'],
    darkMode: 'class', // or 'media' or 'class',
    separator: ':',
    theme: {
        extend: {},
    },
    variants: {
        color: ['block-hover'],
        fontSize: ['block-hover', 'hover'],
        backgroundColor: ['block-hover'],
    },
    plugins: [disabledPlugin()],
}
