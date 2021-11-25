import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ProfileScreen({ navigation }) {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/d3f6ff38-882f-4d73-a87d-ed8051251d78')
      .then((data) => {
        setData(data.data);
      })

      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.aboutTitle}>
        <Text
          onPress={() => navigation.navigate('Profile')}
          style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}
        >
          About
        </Text>
      </View>
      <View>
        <Text style={styles.aboutContent}>{data.text}</Text>
        <Text style={styles.aboutContent}>{data.name}.</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  aboutTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 15,
  },
  aboutContent: {
    fontSize: 17,
    padding: 15,
    color: '#323232'
  }
})