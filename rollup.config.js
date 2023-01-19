import terser from "@rollup/plugin-terser"

export default {
  input: "index.js",
  plugins: [
    terser()
  ],
  output: [
    {
      file: "dist/index.js",
      format: "esm"
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "indented"
    }
  ]
}
