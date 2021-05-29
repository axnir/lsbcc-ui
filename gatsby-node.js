const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'lsbcc-ui/lib': path.resolve(__dirname, '../components/'),
        'lsbcc-ui/esm': path.resolve(__dirname, '../components/'),
        'lsbcc-ui': path.resolve(__dirname, '../components/'),
      },
    },
  });
};