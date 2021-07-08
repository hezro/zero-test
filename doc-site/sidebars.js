const config = require('./docusaurus.config');
const { sidebarsNavModules } = require('@commitdev/zero-doc-site-common-elements');

module.exports = {
  zero: [
    {
      "About": [{
        type: 'autogenerated',
        dirName: 'about',
      }],
      "Getting started": [{
        type: 'autogenerated',
        dirName: 'getting-started',
      }],
      "Reference": [{
        type: 'autogenerated',
        dirName: 'reference',
      }],
      "Concepts": [{
        type: 'autogenerated',
        dirName: 'concepts',
      }],
    },
    sidebarsNavModules(config),
  ]
}
