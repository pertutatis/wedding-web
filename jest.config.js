module.exports = {
    moduleFileExtensions: [
      'js',
      'ts',
      'json',
      'vue'
    ],
    transform: {
      '^.+\\.ts$': 'ts-jest',
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
}
