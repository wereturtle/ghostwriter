const PACKAGE = require('../../../../../webpack.common.js');

module.exports = PACKAGE(
  'input/tex/extensions/cancel',      // the package to build
  '../../../../../../js',             // location of the MathJax js library
  [                                   // packages to link to
    'components/src/input/tex-base/lib',
    'components/src/input/tex/extensions/enclose/lib',
    'components/src/core/lib'
  ],
  __dirname                           // our directory
);
