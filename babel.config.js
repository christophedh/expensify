// babel.config.js

module.exports = {
    presets: [
        [
            '@babel/preset-react',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],

    plugins: ['@babel/plugin-proposal-class-properties']
}
