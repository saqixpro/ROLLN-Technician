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
  textContentType,
  keyboardType,
  maxLength,
  value,
  radius,
  style,
  padding,
  onFocus,
  onBlur,
  innerRef
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          width: ContainerWidth ? ContainerWidth : width / 1.1,
          alignSelf: custom ? "flex-start" : "center",
        },
        {
          borderRadius: radius || 15, ...style
        }
      ]}
    >
      <TextInput
        style={[styles.input, {    padding: padding ? padding : Platform.OS == "android" ? 10 : 15,
        }]}
        ref={innerRef}
        placeholder={placeholder}
        secureTextEntry={secureText}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        textContentType={textContentType}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        placeholderTextColor={colors.light_gray}
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
    marginLeft: Platform.OS == "android" ? 10 : 0,
    width: Platform.OS == "ios" ? "100%" : "95%",
    fontSize: 16,
    color: colors.textColor,
    zIndex: 1,
  },
});

export default App;
