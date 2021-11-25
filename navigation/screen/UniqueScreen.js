import * as React from 'react';
import { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

export default function UniqueScreen({ navigation }) {

  const [data, setData] = useState([]);

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
      <View style={{ flex: 1 }}>
        <View style={styles.uniqueTitle}>
          <Text
            onPress={() => navigation.navigate('Unique')}
            style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>
            Info Unik
          </Text>
          <View style={{ paddingTop: 20 }}>
            <View style={styles.uniqueInfo}>
              <Text style={{ fontSize: 20, color: '#232323', fontWeight: 'bold' }}>1. Indonesia adalah Negara Maju!</Text>
              <FlatList
                data={data.unique}
                renderItem={({ item }) => (
                  <View style={styles.content}>
                    <Text style={styles.contentFont}>{item.negaramaju}</Text>
                  </View>
                )} />
            </View>
            <View style= {styles.uniqueInfo}>
              <Text style={{ fontSize: 20, color: '#232323', fontWeight: 'bold' }}>2. Indonesia itu besar sekali!</Text>
              <FlatList
                data={data.unique}
                renderItem={({ item }) => (
                  <View style={styles.content}>
                    <Text style={styles.contentFont}>{item.totalarea}</Text>
                  </View>
                )} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  uniqueTitle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingLeft: 15,
  },
  uniqueInfo: {
    backgroundColor: '#dcdcdc',
    borderRadius: 16,
    left: 2,
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 15,
    width: 375,
  },
  content: {
    fontSize: 17,
    paddingTop: 2,
  },
  contentFont: {
    fontSize: 17,
    color: 'black',
    paddingLeft: 23
  }
})