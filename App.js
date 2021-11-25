import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainContainer from './navigation/MainContainer';


export default function App() {
  return (
    <View style={styles.container}>
      <MainContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
});