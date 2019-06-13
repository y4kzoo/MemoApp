import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <MemoList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;
