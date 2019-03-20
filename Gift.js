import React, { Component } from 'react';
import { View, Flatlist, Button } from 'react-native';
import QuestionsItem from './QuestionsItem';

import {connect} from 'react-redux';
import { pushText } from 'GiftActions';

class Gift extends Component {

  pushData = (data) => {     
      this.props.pushText(data);   
  }  

  render() {
    return (
      <View>
         <FlatList data={this.props.questions} renderItem={({item}) => <QuestionsItem sendText={this.pushData} data={item} />} />
         <Button title="See" onPress={() => alert(JSON.stringify(this.props.awnsers))} />
      </View>
    );
  }
}

const mapToStateToProps = state => {
  return {
    awnsers:state.gift.awnsers
  }
};

export default connect()(Gift)
