module.exports = {
  extends: ["expo", "plugin:import/recommended"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        ignore: ["expo-status-bar", "expo*", "@expo/*"]
      }
    ]
  }
};
