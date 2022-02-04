/* eslint-env es6 */
module.exports = api => {
  if (api.env('test')) {
    api.cache(true)
    return {
      presets: ['next/babel'],
      plugins: ['@emotion/babel-plugin'],
    }
  }
  if (api.env('development')) {
    api.cache(true)
    return {
      presets: [
        [
          'next/babel',
          {
            'preset-react': {
              runtime: 'automatic',
            },
          },
        ],
      ],
      plugins: ['@emotion/babel-plugin'],
    }
  }

  api.cache(true)
  return {
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
          },
        },
      ],
    ],
    plugins: ['@emotion/babel-plugin', ['transform-remove-console', { exclude: ['error'] }]],
  }
}
