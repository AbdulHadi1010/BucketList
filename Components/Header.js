import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Header() {

    return (
      <View style={styles.head}>
        <Text style={styles.txt}>Your Bucket List</Text>
      </View>
    )
}


const styles = StyleSheet.create ({
  head:{
    padding: 20,
    margin: 20,
    width: 500,
    backgroundColor: '#4A545C'
  },
  txt: {
    color: '#F2ECFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});