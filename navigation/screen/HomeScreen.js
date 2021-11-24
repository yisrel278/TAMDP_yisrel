import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackgroundBase } from 'react-native';
import axios from 'axios';
//import gambar from '../../public/gambar.json';

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);
  const gambar = require('../../public/gambar.json')
  /* useEffect(() => {
    axios
      .get('gambar.json')
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); */

  return (
    <View style={styles.container}>
      <View style={styles.textTitle}>
        <Text
          onPress={() => navigation.navigate('Home')}
          style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}
        >
          Fun Facts of Indonesia!
        </Text>
        <View style={styles.basicInfo}>
          <Text style={{ fontSize: 20, color: 'black' }}>BASIC INFORMATION</Text>
        </View>
        <View>
          {data.map((result) => {
            return (
              <Image
                gambar
              />
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  textTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 15,
  },
  basicInfo: {
    backgroundColor: '#dcdcdc',
    borderRadius: 30,
    left: 2,
    top: 20,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    width: 375,
  }
})