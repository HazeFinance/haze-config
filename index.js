const hazeAddresses56 = require('./56/hazeAddresses');
const hazeProperties56 = require('./56/hazeProperties');
const HAZE_COMMON_ABIS = require('./common/hazeABIs');

const HAZE_ADDRESSES = {
  '56': hazeAddresses56
}

const HAZE_PROPERTIES = {
  '56': hazeProperties56
}


module.exports = {
  HAZE_ADDRESSES,
  HAZE_PROPERTIES,
  HAZE_COMMON_ABIS
}
