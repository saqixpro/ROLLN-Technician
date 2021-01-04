import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/theme";
import BackButton from "./backBtn";
import MenuBtn from "./menuBtn";

const App = ({ navigation, title, hideGoBack }) => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flex: 0.2,
          alignItems: "center",
        }}
      >
        {!hideGoBack ? (
          <BackButton navigation={navigation} />
        ) : (
          <MenuBtn navigation={navigation} />
        )}
      </View>
      <View
        style={{
          flex: 0.6,
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flex: 0.2 }}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: colors.textColor,
  },
});
