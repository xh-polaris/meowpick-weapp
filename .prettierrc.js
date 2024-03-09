//.prettierrc.js
module.exports = {
    // 最大长度80个字符
    printWidth: 120,
    // 行末分号
    semi: true,
    // 单引号
    singleQuote: true,
    // JSX双引号
    jsxSingleQuote: false,
    // 尽可能使用尾随逗号（包括函数参数）
    trailingComma: 'none',
    // 在对象文字中打印括号之间的空格。
    bracketSpacing: true,
    // > 标签放在最后一行的末尾，而不是单独放在下一行
    jsxBracketSameLine: true,
    // 缩进
    tabWidth: 4,
    // 使用tab还是空格
    useTabs: false,
    // 行尾换行格式
    endOfLine: 'auto',
    //空格敏感
    HTMLWhitespaceSensitivity: 'ignore',
    extends: [
        //继承 vue 的标准特性
        'plugin:vue/essential',
        'eslint:recommended',
        //避免冲突
        'plugin:prettier/recommended'
    ]
};

