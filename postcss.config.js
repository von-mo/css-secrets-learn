module.exports = {
  plugins: [
    require("postcss-preset-env")({
      /* use stage 3 features + css nesting rules */
      stage: 3,
      features: {
        "nesting-rules": true
      }
    }),
    require("autoprefixer")({
      flexbox: "no-2009"
    }),
    require("cssnano")({
      preset: "default"
    }),
    require("postcss-import"),
  ]
};