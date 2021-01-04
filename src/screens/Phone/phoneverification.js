import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Modal,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { ActionButton, BackButton } from "../../components";
import { styles } from "./styles";
import PhoneInput from "react-native-phone-input";
import { colors } from "../../theme/theme";
import { OTPModal } from "./otpmodal";

const { width, height } = Dimensions.get("screen");

const App = (props) => {
  const phone = useRef(null);
  const [phoneNo, setPhoneNo] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const toNextScreen = () => {
    setModalVisible(false);
    alert(`You Will Be redirected to next screen`);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <BackButton navigation={props.navigation} />
          <Image source={require("../../assets/logo.png")} />
        </View>
        <Text style={styles.title}>Phone Verification</Text>
        <PhoneInput
          textStyle={{
            color: colors.textColor,
            fontSize: 20,
            letterSpacing: 3,
          }}
          style={styles.input}
          flagStyle={{ borderRadius: 4 }}
          ref={phone}
          allowZeroAfterCountryCode={false}
          autoformat
          onChangePhoneNumber={(number) => setPhoneNo(phone.current.getValue())}
        />
      </View>
      {modalVisible ? (
        <OTPModal
          phone={phoneNo}
          toPasswordScreen={toNextScreen}
          navigation={props.navigation}
        />
      ) : null}
      <KeyboardAvoidingView keyboardVerticalOffset={30} behavior="padding">
        <View style={styles.bottomView}>
          <Text style={styles.msg}>
            To complete the registeration, enter your phone number to which you
            will receive an SMS with a code
          </Text>
          <ActionButton
            onPress={() => setModalVisible(true)}
            icon="chevron-right"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
