module.exports = {
    preset: 'react-native',
    setupFiles: [
      './node_modules/react-native-gesture-handler/jestSetup.js'
    ],
    transformIgnorePatterns: [
      'node_modules/(?!(@react-native|react-native)/)'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
