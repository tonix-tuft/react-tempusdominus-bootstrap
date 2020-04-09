import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import inject from "@rollup/plugin-inject";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
      // Uncomment to generate an implicit default export for ES6 consuming code
      // (only if bundling a CommonJS build without bundling an ES6 build, would need to comment the line below).
      // esModule: false,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      plugins: [["@babel/transform-runtime"]],
    }),
    resolve(),
    commonjs(),
    inject({
      $: "jquery",
      jQuery: "jquery",
      moment: "moment",
    }),
  ],
};
