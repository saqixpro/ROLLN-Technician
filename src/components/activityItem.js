import React from "react";
import { Bar } from "react-native-progress";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { colors } from "../theme/theme";

const { width, height } = Dimensions.get("screen");

const App = ({ icon, text, value, progressColor, progress }) => (
  <View style={styles.acitvityItem}>
    <View style={styles.activity_icon}>
      <View style={styles.iconContainer}>
        <FontAwesome
          name={icon}
          size={20}
          color={progressColor || colors.textColor}
        />
      </View>
    </View>
    <View style={styles.activity_item_body}>
      <View style={styles.activity_item_text}>
        <Text style={styles.activity_text}>{text}</Text>
        <Text style={styles.activity_text}>{value}</Text>
      </View>
      <View style={styles.activity_item_progress}>
        <Bar
          borderWidth={0}
          progress={progress}
          height={10}
          width={width / 1.35}
          borderRadius={10}
          color={progressColor || "rgba(81,135,185,1)"}
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  acitvityItem: {
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  activity_icon: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  activity_item_body: {
    flex: 0.9,
  },
  activity_text: {
    color: colors.textColor,
    fontWeight: "600",
    fontSize: 16,
  },
  activity_item_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },

  activity_item_progress: {
    marginLeft: 8,
  },
  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -0.1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
  },
});

export default App;
