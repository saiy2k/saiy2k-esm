import { build } from "esbuild";

build({
  entryPoints: ['src/index.jsx'],
  external: ['react', 'react-dom'],
  bundle: true,
  outfile: 'dist/index.js',
  target: ["esnext"],
  format: 'esm'
}).catch(() => process.exit(1))
