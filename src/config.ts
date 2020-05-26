if (typeof window === 'undefined') {
  require('dotenv').config();
}

export default {
  app: {
    env: process.env.NODE_ENV,
    port: parseInt(process.env.PORT, 10) || 3000,
    logLevel: process.env.LOG_LEVEL || 'info',
    slugFormat: {
      lower: true,
      replacement: '_',
      strict: true,
    },
  },
  services: {
    apiBaseUrl: process.env.API_BASE_URL,
  },
};
