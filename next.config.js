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
                      @import "./src/styles/variablesStyles.module.scss";
                      @import "./src/styles/mixins.module.scss";
                      `,
      }
  }
  return {...nextConfig};
}