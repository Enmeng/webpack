class RemoveCommentsPlugin {
    apply(compiler) {
        console.log('RemoveCommentsPlugin启动');
        console.log('compiler', compiler);
        compiler.emit.tap('RemoveCommentsPlugin', compilation => {
            for(const name in compilation.assets) {
                console.log(name);
            }
        })
    }
}

module.exports = RemoveCommentsPlugin