import React from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableHighlight,
} from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="Password" />
        <TouchableHighlight style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>ログインする</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 14,
    backgroundColor: '#FFF',
  },
  input: {
    backgroundColor: '#EEE',
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 16,
    padding: 8,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default LoginScreen;
