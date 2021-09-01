import path from 'path';
import { dirname } from 'path';

export default {
  entry: './dist/main.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(dirname('.'), 'dist'),
  },
};
