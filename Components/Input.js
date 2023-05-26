import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Input({ submitHandler }) {
  const textInputRef = useRef(null);

  const handleButtonPress = () => {
    textInputRef.current.clear();
  };
  const [text, setText] = useState("");

  const changeText = (val) => {
    setText(val);
  };
  return (
    <View style={styles.main}>
      <TextInput
        ref={textInputRef}
        style={styles.textin}
        placeholder="Enter Here"
        placeholderTextColor={"#e7e7e7"}
        onChangeText={changeText}
      />
      <TouchableOpacity onPress={() => {submitHandler(text); handleButtonPress;}}>
        <Text style={styles.btn}>▶</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    alignContents: "center",
  },
  btn: {
    marginLeft: 10,
    paddingLeft: 10,
    paddingRight: 7,
    paddingBottom: 5,
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "#CD7866",
    borderRadius: 100,
  },
  textin: {
    paddingLeft: 20,
    fontSize: 20,
    backgroundColor: "#2F3135",
    // textAlign: "center",
    borderRadius: 10,
    width: 250,
    color: "#fff",
  },
});
