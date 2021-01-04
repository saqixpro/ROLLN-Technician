import React, { useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { BackButton } from "../../components";
import { colors } from "../../theme/theme";
import { styles } from "./styles";

const OTPModal = ({ phone, toPasswordScreen, navigation }) => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const [otp, setOTP] = useState("");
  const [visible, setVisible] = useState(true);

  const confirmOTP = () => (otp.length == 4 ? toPasswordScreen() : null);

  const handleChangeText = (box, text) => {
    let _otp = otp.split("");
    switch (box) {
      case "box1":
        _otp[0] = text;
        box2.current.focus();
        break;
      case "box2":
        _otp[1] = text;
        box3.current.focus();
        break;
      case "box3":
        _otp[2] = text;
        box4.current.focus();
        break;
      case "box4":
        _otp[3] = text;
        break;
    }
    setOTP(_otp.join(""));
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <StatusBar barStyle="light-content" />
      <View style={styles.otpModal}>
        <SafeAreaView />
        <View style={{ flex: 0.8 }}>
          <View style={[styles.header, { marginBottom: 10 }]}>
            <BackButton navigation={navigation} />
            <Image source={require("../../assets/logo.png")} />
          </View>
          <View style={{ marginVertical: 50 }}>
            <Text style={styles.otpTitle}>Phone Verification</Text>
            <Text style={styles.otpSubTitle}>Enter your OTP code here</Text>
          </View>

          <View style={_styles.OTPContainer}>
            <TextInput
              style={_styles.OTPBox}
              ref={box1}
              placeholder="0"
              onChangeText={(text) => handleChangeText("box1", text)}
              placeholderTextColor="#fff"
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={_styles.OTPBox}
              ref={box2}
              placeholder="0"
              onChangeText={(text) => handleChangeText("box2", text)}
              placeholderTextColor="#fff"
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={_styles.OTPBox}
              ref={box3}
              placeholder="0"
              onChangeText={(text) => handleChangeText("box3", text)}
              placeholderTextColor="#fff"
              maxLength={1}
              keyboardType="number-pad"
            />
            <TextInput
              style={_styles.OTPBox}
              ref={box4}
              placeholder="0"
              onChangeText={(text) => handleChangeText("box4", text)}
              placeholderTextColor="#fff"
              maxLength={1}
              keyboardType="number-pad"
            />
          </View>
        </View>
        <KeyboardAvoidingView keyboardVerticalOffset={60} behavior="padding">
          <TouchableOpacity
            onPress={confirmOTP}
            style={{ ...styles.button, alignSelf: "center" }}
          >
            <Text style={styles.buttonText}>Verify Now</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export { OTPModal };

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.background,
  },
  OTPContainer: {
    flexDirection: "row",
    width: "90%",
    marginVertical: 20,
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  OTPBox: {
    backgroundColor: colors.background,
    borderColor: colors.textColor,
    borderWidth: 0.3,
    width: 60,
    padding: 10,
    height: 60,
    borderRadius: 15,
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: colors.textColor,
    shadowColor: colors.gray,
    shadowOffset: {
      width: -3,
      height: -3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});
