const { alias } = require('react-app-rewire-alias');
const path = require('path');

module.exports = function override(config) {
  alias({
    '@': path.resolve(__dirname, 'src')
  })(config);  // 修改resolve.alias的默认配置

  return config;
}
