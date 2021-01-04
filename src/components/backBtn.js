import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../theme/theme";
const App = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={26} color={colors.textColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    borderRadius: 14,
    shadowColor: "#888",
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

export default App;
