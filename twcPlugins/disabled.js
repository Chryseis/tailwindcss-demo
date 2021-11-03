const plugin = require('tailwindcss/plugin')

const disabledPlugin = () =>
    plugin(function ({ e, addVariant }) {
        addVariant('test', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.${e(`test${separator}${className}`)}:disabled`
            })
        })
    })

module.exports = disabledPlugin
