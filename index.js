var idgen = require('idgen')

module.exports = function () {
  return idgen(64).toUpperCase().replace(/[-_01OI5SB8]/g, '').substring(0, 8)
}