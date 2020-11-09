module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    [
      "import",
      {
        libraryName: "rokku",
        libraryDirectory: "",
        style: (name, file) => {
          const { filename } = file.opts;
          if (filename.indexOf("demo") === -1) {
            return "./style/index.less";
          }
          return "../style/index.less"; // 注意：这里 ./ 不可省略
        },
      },
    ],
  ],
};
