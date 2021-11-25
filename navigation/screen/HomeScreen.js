import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, Alert, TouchableOpacity } from 'react-native';
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
            style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>
            Fun Facts of Indonesia!
          </Text>
          <View style={styles.basicInfo}>
            <Text style={{ fontSize: 20, color: 'black' }}>BASIC INFORMATION</Text>
          </View>
          <View style={{ paddingTop: 40 }}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
              Alert.alert(
                "Peta Indonesia", "Indonesia merupakan negara kepulauan terbesar di dunia yang terletak di daerah Asia Tenggara."
              )
            }}>
              <Image
                source={{
                  uri: 'https://www.pngkey.com/png/full/375-3751168_indonesia-map-png.png',
                }}
                style={styles.mapStyle}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={data.basic}
            renderItem={({ item }) => (
              <View style={styles.content}>
                <Text style={styles.contentFont}>Nama : {item.name}</Text>
                <Text style={styles.contentFont}>Motto : {item.motto}</Text>
                <Text style={styles.contentFont}>Bendera : {item.flag}</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                  Alert.alert(
                    'Bendera', 'Bendera Indonesia terdiri dari dua warna: Merah dan Putih. Kedua warna ini diambil dari warna panji Kerajaan Majapahit pada abad ke-13.'
                  )
                }}>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Indonesia_%28bordered%29.svg/1280px-Flag_of_Indonesia_%28bordered%29.svg.png',
                    }}
                    style={{ height: 60, width: 80, alignSelf: 'center', resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
                <Text style={styles.contentFont}>Lambang : {item.emblem}</Text>
                <Text style={styles.contentFont}>Lagu Nasional : {item.anthem}</Text>
                <Text style={styles.contentFont}>Ibukota : {item.capital}</Text>
                <Text style={styles.contentFont}>Bahasa Resmi : {item.language}</Text>
                <Text style={styles.contentFont}>Presiden : {item.president}</Text>
                <Text style={styles.contentFont}>Hari Kemerdekaan : {item.independence}</Text>
                <Text style={styles.contentFont}>Luas Wilayah : {item.landarea} km persegi</Text>
                <Text style={styles.contentFont}>Jumlah Pulau : {item.islands}</Text>
                <Text style={styles.contentFont}>Total Populasi : {item.population}</Text>
                <Text style={styles.contentFont}>Peringkat Populasi : {item.populationrank}</Text>
                <Text style={styles.contentFont}>GDP/PDB : {item.gdp}</Text>
                <Text style={styles.contentFont}>Peringkat GDP : {item.gdprank}</Text>
                <Text style={styles.contentFont}>Mata Uang : {item.currency}</Text>
                <Text style={styles.contentFont}>Zona Waktu : {item.timezone}</Text>
                <Text style={styles.contentFont}>Kode Dial : {item.phone}</Text>
                <Text style={styles.contentFont}>Domain : {item.net}</Text>
              </View>
            )}
          />
          <View style={{ paddingTop: 10 }}></View>
        </View>
      </View>
    </ScrollView >
  );
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
    resizeMode: 'contain',
  },
  content: {
    fontSize: 17,
    paddingTop: 20,
  },
  contentFont: {
    fontSize: 15,
    color: 'black',
    paddingTop: 2
  }
})