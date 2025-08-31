const { withNativeWind } = require("nativewind/metro");
const path = require("path");
const {
  getSentryExpoConfig
} = require("@sentry/react-native/metro");

const config = getSentryExpoConfig(__dirname);

// Add resolver configuration for path aliases
config.resolver.alias = {
  "@": path.resolve(__dirname, "./"),
};

module.exports = withNativeWind(config, { input: "./app/globals.css" });