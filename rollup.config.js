import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'

const packageJson = require("./package.json")

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            babel({
                plugins: ['transform-class-properties']
            }),
            commonjs(),
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [{ file: "dist/index.js", format: 'esm' }],
        plugins: []
    }
]