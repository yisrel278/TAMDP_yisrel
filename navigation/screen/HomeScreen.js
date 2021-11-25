import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import axios from 'axios';

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
    <ScrollView>
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
          <FlatList
            data={data.basic}
            renderItem={({ item }) => (
              <View style={styles.content}>
                <Text style={styles.contentFont}>Nama : {item.name}</Text>
                <Text style={styles.contentFont}>Motto : {item.motto}</Text>
                <Text style={styles.contentFont}>Bendera : {item.flag}</Text>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Indonesia_%28bordered%29.svg/1280px-Flag_of_Indonesia_%28bordered%29.svg.png',
                  }}
                  style={{ height: 60, width: 80, alignSelf: 'center', top: 1, borderRadius: 10 }}
                />
                <Text style={styles.contentFont}>Lambang : {item.emblem}</Text>
                <Text style={styles.contentFont}>Lagu Nasional : {item.anthem}</Text>
                <Text style={styles.contentFont}>Ibukota : {item.capital}</Text>
                <Text style={styles.contentFont}>Bahasa Resmi : {item.language}</Text>
                <Text style={styles.contentFont}>Agama :</Text>
                <FlatList
                  data={data.religion}
                  renderItem={({ item }) => (
                    <View style={{ paddingLeft: 0 }}>
                      <Text style={styles.contentFont}>{item.id1}</Text>
                      <Text style={styles.contentFont}>{item.id2}</Text>
                      <Text style={styles.contentFont}>{item.id3}</Text>
                      <Text style={styles.contentFont}>{item.id4}</Text>
                      <Text style={styles.contentFont}>{item.id5}</Text>
                      <Text style={styles.contentFont}>{item.id6}</Text>
                    </View>
                  )}
                />
                <Text style={styles.contentFont}>Presiden : {item.president}</Text>
                <Text style={styles.contentFont}>Hari Kemerdekaan : {item.independence}</Text>
                <Text style={styles.contentFont}>Luas Wilayah : {item.landarea} km persegi</Text>
                <Text style={styles.contentFont}>Jumlah Pulau : {item.islands}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
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
    color: 'black',
    paddingTop: 2
  }
})