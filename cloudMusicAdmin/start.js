const { resolve } = require('path')
const r = path => resolve(__dirname, path)

require('babel-core/register')({
  'presets': [
    'es2015',
    'stage-3'
  ],
  'plugins': [
    'transform-decorators-legacy',
    'add-module-exports',
    [
      'module-alias', [
        {
          src: r('./server'), 'expose': '~',
          src: r('./server/database'), 'expose': 'database'
        }
      ]
    ]
  ]
})

require('babel-polyfill')
require('./server/index.js')