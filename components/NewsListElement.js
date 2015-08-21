var React = require('react-native');
var {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

class NewsListElement extends React.Component {

  render() {
    return (
      <View style={styles.rowView}>
        <Image style={styles.thumbImage} source={{uri: this.props.icon}} />
        <View style={styles.contentView}>
          <Text style={styles.timeText}>{this.props.time}</Text>
          <Text style={styles.titleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  thumbImage: {
    alignSelf: 'center',
    width: 48,
    height: 48,
  },
  contentView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 16,
  },
  timeText: {
    color: '#ccc',
    fontSize: 12,
  },
  titleText: {
    fontSize: 14,
    marginTop: 8,
  },
});

module.exports = NewsListElement;
