const plugin = require('tailwindcss/plugin')

const disabledPlugin = () =>
    plugin(function ({ e, addVariant }) {
        addVariant('block-hover', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.block:hover .${e(`block-hover${separator}${className}`)}`
            })
        })
    })

module.exports = disabledPlugin
