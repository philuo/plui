module.exports = {
    // vetur配置
    settings: {
        'vetur.useWorkspaceDependencies': true,
        'vetur.experimental.templateInterpolationService': true,
        'vetur.format.enable': true,
        'vetur.validation.template': true,
        'vetur.validation.templateProps': false
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
