var React = require('react-native');
var {
  NavigatorIOS,
  StyleSheet,
} = React;

var NewsListView = require('./NewsListView');

class RootView extends React.Component {

  render() {
    return (
      <NavigatorIOS
        style = {styles.navigatorView}
        initialRoute = {{
          component: NewsListView,
          title: 'ng news'
        }}
      />
    );
  }

}

var styles = StyleSheet.create({
  navigatorView: {
    flex: 1,
  },
});

module.exports = RootView;
