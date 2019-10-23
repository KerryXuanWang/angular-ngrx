// @ts-check
const { npm_package_config_port: PORT = 4200 } = process.env;

const PROXY_CONFIG = {
  '/api/github': {
    target: 'https://api.github.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/github': '',
    },
  },

  '/api-mock/': {
    target: `http://localhost:${~~PORT + 10}`,
    changeOrigin: true,
    secure: false,
  },

  // api json-server
  '/api/v1/': {
    target: `http://localhost:3000`,
    changeOrigin: true,
    secure: false,
  },

  '/api-pbe/': {
    target: 'https://dev.oss.deploy.hs-portal.eng.vmware.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api-pbe': '/api',
    },
  },
};

module.exports = PROXY_CONFIG;
