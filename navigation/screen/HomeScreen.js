import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';
import { FLIPPED_ALIAS_KEYS } from '@babel/types';

export default function HomeScreen({ navigation }) {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://mocki.io/v1/0ae19f55-ed7a-4578-b054-41cfae2e17e3')
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));

  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : <Text></Text>}
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
          <Image
            source={{
              uri: 'https://www.pngkey.com/png/full/375-3751168_indonesia-map-png.png',
            }}
            style={styles.mapStyle}
          />
        </View>
        <View style={styles.content}>
          <FlatList
            basic={data.basic}
            renderItem={({item}) => (
              <Text style={styles.contentFont}>Nama   : {item.name}</Text>
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  mapStyle: {
    height: 140,
    width: 385,
    top: 40
  },
  content: {
    fontSize: 17,
    paddingTop: 60,
  },
  contentFont: {
    fontSize: 15,
    color: 'black'
  }
})