import React from "react";
import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

class NewsHolder extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text style={styles.textBox}>ここにテキストを入力</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: SCREEN_WIDTH
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 50,
    backgroundColor: "#d6d7da"
  },
  textBox: {}
});

export default NewsHolder;
