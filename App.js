import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from "axios";
import Textinput from "./components/Textinput"
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';

export default function App() {

  const [verb, setVerb] = React.useState("eat");
  const [sentence, setSentence] = React.useState("");

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      //color: '#fff',
      borderWidth: 1,
      //borderColor: '#fff',
      borderRadius: 5,
      padding: 10
    },
    text: {
      //color: '#fff'
    },
    container: {
      flex: 1,
      //backgroundColor: '#333',
      //color: '#fff',
      alignItems: 'center',
      padding: 20
      //justifyContent: 'center',
    },
  });
  
  var options = {
    method: 'GET',
    url: 'https://linguatools-sentence-generating.p.rapidapi.com/realise',
    params: {
      object: 'thief',
      subject: 'cat',
      verb: verb,
      perfect: 'perfect',
      tense: 'past'
    },
    headers: {
      'x-rapidapi-key': '2875a4121fmsh98d7b4af12bc90cp11a95ejsnf915df3b87e3',
      'x-rapidapi-host': 'linguatools-sentence-generating.p.rapidapi.com'
    }
  };

  axios.request(options).then(function (response) {
    console.log(response);
    setSentence(response.data.sentence);
  }).catch(function (error) {
    console.error("APP HAS ERRORED", error);
  });


  return (
    <View style={styles.container}>
      <SafeAreaView>


        <TextInput
          style={styles.input}
          onChangeText={verb => setVerb(verb)}
          value={verb}
        />

        <Text style={styles.text}>Sentence: {sentence}</Text>

        {/* <Text style={{padding: 10, fontSize: 42}}>
          {types.map((type) => <Text>{type}{"\n"}</Text>)}
        </Text> */}

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
