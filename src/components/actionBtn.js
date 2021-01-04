import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { colors } from "../theme/theme";
const App = ({ icon, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Entypo name={icon} size={26} color={colors.textColor} />
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
    backgroundColor: colors.button_primary,
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
