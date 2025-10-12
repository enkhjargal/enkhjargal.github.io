export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    cssnano: process.env.JEKYLL_ENV == 'production' ? { preset: 'default' } : {}
  }
};
