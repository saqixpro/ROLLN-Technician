import React from "react";
import { Dimensions, Platform, StyleSheet, View } from "react-native";
import {
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("screen");

const App = ({
  placeholder,
  custom,
  type,
  secureText,
  onEyePress,
  onChangeText,
  ContainerWidth,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: ContainerWidth ? ContainerWidth : width / 1.1,
          alignSelf: custom ? "flex-start" : "center",
        },
      ]}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        placeholderTextColor={colors.textColor}
      />
      {type == "password" ? (
        <View style={styles.eye}>
          <TouchableOpacity onPress={onEyePress}>
            <Ionicons
              name={secureText ? "eye-off" : "eye"}
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    borderRadius: 15,
    borderColor: colors.gray,
    borderWidth: 2,
    alignItems: "center",
    shadowColor: colors.gray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    flexDirection: "row",
  },
  eye: {
    position: "relative",
    width: 40,
    height: 40,
    right: 40,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    shadowColor: colors.gray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 8,
    backgroundColor: colors.background_secondary,
    padding: 8,
    borderRadius: 10,
  },
  input: {
    padding: Platform.OS == "android" ? 10 : 15,
    marginLeft: Platform.OS == "android" ? 10 : 0,
    width: Platform.OS == "ios" ? "100%" : "95%",
    fontSize: 16,
    color: colors.textColor,
    zIndex: 1,
  },
});

export default App;
