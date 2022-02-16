const marked = require('marked');

console.log('marked', marked)

module.exports = source => {
    console.log('source:', source);

    const html = marked.parse(source);
    const code = `module.exports = ${JSON.stringify(html)}`;
    //也可以返回html，然后使用html-loader解析

    return code;
}

