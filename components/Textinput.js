import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, setText] = React.useState("Cat");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default UselessTextInput;