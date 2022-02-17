class RemoveCommentsPlugin {
  apply(compiler) {
    console.log("RemoveCommentsPlugin启动");
    console.log("compiler", compiler.plugin);
    compiler.plugin("emit", (compilation, callback) => {
      console.log("callBack", callback);
      for (const name in compilation.assets) {
        console.log("name-------------------", name);
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, "");
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          };
        }
      }
      callback();
    });
  }
}

module.exports = RemoveCommentsPlugin;
