import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import axios from "axios";
import Textinput from "./components/Textinput"
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default function App() {
  const [countryData, setCountryData] = useState(true);

  async function makeRequest() {
    const options = {
      method: 'GET',
      url: 'https://covid-19-data.p.rapidapi.com/country',
      params: {name: 'italy'},
      headers: {
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
        'x-rapidapi-key': ''
      }
    };
    let res = await axios(options)
    setCountryData(res.data[0])
    console.log(countryData);
  }

  makeRequest();
  

  let country = countryData.country
  let confirmed = countryData.confirmed
  console.log(country, confirmed)

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <Text>Hello world</Text>
      </SafeAreaView>


      <SafeAreaView>
      <Text>Today in {country} there is a total of {confirmed} cases</Text>
      </SafeAreaView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
