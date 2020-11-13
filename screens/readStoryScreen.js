import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../components/header.js'
export default class ReadStory extends React.Component {
  render(){
  return (
    <View style={styles.container}>
        <Header/>
        <Text>ReadStory</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
