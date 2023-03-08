/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
      defaultConfig['sassOptions'] = {
        prependData: `
                      @import "./src/styles/_variables.scss";
                      @import "./src/styles/_mixins.scss";
                      `,
      }
  }
  return {...nextConfig};
}