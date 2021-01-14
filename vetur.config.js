module.exports = {
    // vetur配置
    settings: {
        'vetur.useWorkspaceDependencies': true,
        'vetur.experimental.templateInterpolationService': true,
        'vetur.format.enable': true
    },
    projects: [
        {
            root: './dev',
            package: './package.json',
            tsconfig: './tsconfig.json',
            globalComponents: ['./src/**/*.vue'],
        },
    ],
    hmr: { overlay: false }
};
