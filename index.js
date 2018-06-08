var idgen = require('idgen')

module.exports = function (buf) {
  return idgen(64, buf).toUpperCase().replace(/[-_01OI5SB8]/g, '').substring(0, 8)
}