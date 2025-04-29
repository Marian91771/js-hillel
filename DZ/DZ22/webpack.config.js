import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



export default{
    mode: 'development',
    entry: './JS/app.js',
    devtool: 'source-map',
    output:{
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
      },
    watch: true,
}
