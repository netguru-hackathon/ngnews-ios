var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  ListView,
  StyleSheet
} = React;

var RootView = require('./components/RootView');

AppRegistry.registerComponent('RootView', () => RootView);
