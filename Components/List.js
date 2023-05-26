import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, TextInput } from "react-native";

export default function List({ points, pressHandler, Lists }) {
  const [tasks, setTasks] = useState([]);
const [editing, setEditing] = useState(false);

  const startEditing = (points) => {
    setEditing(points);
  };
  const updateTask = (points, newText) => {
    setTasks(
      Lists.map((todo) => (Lists.key === points  ? { ...todo, todo: newText } : todo))
    );
    setEditing(false);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        marginTop: "7%",
        backgroundColor: "#A9CEC2",
        borderRadius: 10,
        minWidth: 300,
      }}>
      <TouchableOpacity onPress={() => pressHandler(points.key)}>
        <Text style={{ fontSize: 15, paddingTop: "1%" }}>❌</Text>
      </TouchableOpacity>

      {editing === points ? (<TextInput style={styles.textin} value={points.todo} onChangeText={( newText) => updateTask(points, newText)}/>) : 
      (<><TouchableOpacity onPress={() => startEditing(points)}><Text style={{ fontSize: 15, paddingTop: "1%" }}>✏️</Text></TouchableOpacity><Text style={styles.item}>{points.todo}</Text></>)}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    paddingLeft: "2%",
  },
  textin: {
    padding: 5,
    paddingLeft: 20,
    backgroundColor: "#2F3135",
    borderRadius: 10,
    width: 150,
    color: '#fff'
  },
});
