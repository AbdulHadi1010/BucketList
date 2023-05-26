import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import List from "./Components/List";
import Input from "./Components/Input";
import Header from "./Components/Header";

export default function App() {

  const [Lists, setLists] = useState([
    { todo: "Hang Out", key: "1" },
    { todo: "Play Games", key: "2" },
    { todo: "Travel", key: "3" },
  ]);
  const pressHandler = (key) => {
    setLists((prevList) => {
      return prevList.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text != "") {
      setLists((prevList) => {
        return [{ todo: text, key: Math.random().toString() }, ...prevList];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Input submitHandler={submitHandler} />
      <FlatList
        data={Lists}
        renderItem={({ item }) => (
          <List points={item} pressHandler={pressHandler} Lists={Lists}/>
          
        )}
      />
      <StatusBar backgroundColor="white" style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
  },
});
