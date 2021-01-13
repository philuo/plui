module.exports = {
    // 每行代码长度（默认80）
    printWidth: 100,
    // 每个tab相当于多少个空格（默认2）
    tabWidth: 4,
    // 是否使用tab进行缩进（默认false）
    useTabs: false,
    // 使用单引号（默认false）
    singleQuote: true,
    // 声明结尾使用分号(默认true)
    semi: true,
    // 多行使用拖尾逗号（默认none）
    trailingComma: 'none',
    // 对象字面量的大括号间使用空格（默认true）
    bracketSpacing: true,
    // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
    arrowParens: 'avoid',
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'flow'
            }
        },
        {
            files: '*.json',
            options: {
                parser: 'json'
            }
        },
        {
            files: '*.scss',
            options: {
                parser: 'scss'
            }
        },
        {
            files: '*.css',
            options: {
                parser: 'css'
            }
        },
        {
            files: '*.vue',
            options: {
                parser: 'vue'
            }
        },
        {
            files: '*.ts',
            options: {
                parser: 'typescript'
            }
        }
    ]
};
