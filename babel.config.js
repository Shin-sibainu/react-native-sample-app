module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // 開発環境の場合のみreact-refresh/babelを有効にします
      process.env.NODE_ENV === "development" ? "react-refresh/babel" : null,
    ].filter(Boolean), // 無効なエントリー（null）をフィルタリング
  };
};
