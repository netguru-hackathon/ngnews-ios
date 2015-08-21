var React = require('react-native');
var {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} = React;

var NewsListElement = require('./NewsListElement');

class NewsListView extends React.Component {

  constructor() {
    super()
    var dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource: dataSource
    }
  }

  render() {
    console.log(this.state);
    return (
      <ListView
        style={styles.listView}
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow}
      />
    );
  }

  renderRow(data, sectionIndex, rowIndex) {
    return (
      <View style={styles.rowView}>
      <NewsListElement
          icon = {data.icon}
          time = {data.time}
          title = {data.title}
          onPress = {() => this.pressRow(rowIndex)}
        />
      </View>
    );
  }

  pressRow(rowIndex) {
    console.log(rowIndex);
  }

}

var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#efefef',
    paddingTop: 4,
    paddingBottom: 4,
  },
  rowView: {
    marginTop: 4,
    marginRight: 8,
    marginBottom: 4,
    marginLeft: 8,
    padding: 16,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    backgroundColor: '#fff',
  },
})

module.exports = NewsListView;
