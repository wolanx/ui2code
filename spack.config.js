const { config } = require('@swc/core/spack')

module.exports = config({
    entry: {
        main: __dirname + '/src/index.ts',
        ui: __dirname + '/src/ui.ts',
    },
    output: {
        path: __dirname + '/dist',
    },
    module: {},
})
