module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-links'
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.
        config.resolve.alias = {
            '../../theme.config$': '../../../../src/semantic-ui/theme.config'
        }
    
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        });
    
        config.module.rules.push({
            test: /\.less$/,
            loaders: ["style-loader", "css-loader", "less-loader"]
        })
    
        config.resolve.extensions.push('.ts', '.tsx', '.less');
        return config;
    }
};