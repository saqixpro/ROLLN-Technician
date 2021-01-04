import React, { useEffect } from "react";
import { useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Alert,
  Keyboard,
} from "react-native";
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Input, LoginButton } from "../../components";
import { colors } from "../../theme/theme";
import { styles } from "./style";
import LanguageJSON from "../../constants/LanguageJSON.json";
import * as Validation from "./validation";
import { ActionTypes } from "../../constants";
import { tempUser } from "../../store/initialState";
const { height, width } = Dimensions.get("screen");

const App = (props) => {
  const [loginMode, setLoginMode] = useState(true);
  const [secureText, setSecureText] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licensePlateNumber, setLicensePlateNumber] = useState("");
  const [carInsuranceProvider, setCarInsuranceProvider] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [SSN, setSSN] = useState("");
  const [alignment] = useState(new Animated.Value(0));

  const animateView = (index) =>
    Animated.timing(alignment, {
      toValue: index,
      duration: 400,
      useNativeDriver: true,
    }).start();

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", (e) => animateView(1));

    Keyboard.addListener("keyboardWillHide", (e) => animateView(0));
  }, []);

  const containerIntropolate = alignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -height / 10],
  });

  const dynamicStyles = {
    transform: [
      {
        translateY: containerIntropolate,
      },
    ],
  };

  const handleThirdPartyLogin = (provider) =>
    alert(`You Will Be Logged In With ${provider}`);

  const handleLogin = () => {
    // Properly Log in From Backend

    // Save Login User To Redux
    props.loginUser(tempUser);
  };

  const changeLoginMode = (option) => {
    setEmail("");
    setPassword("");
    setLoginMode(option == 0 ? true : false);
  };

  const handleRegister = () => {
    const emailValid = Validation.validateEmail(email);
    const passwordValid = Validation.validatePassword(password);
    const makeValid = Validation.validateMake(make);
    const modelValid = Validation.validateModel(model);
    const yearValid = Validation.validateYear(year);
    const licenseValid = Validation.validateLicense(licenseNumber);
    const licensePlateValid = Validation.validateLicensePlateNumber(
      licensePlateNumber
    );
    const ageValid = Validation.validateDateOfBirth(dateOfBirth);
    const ssnValid = Validation.validateSSN(SSN);
    const CIPValid = Validation.validateCarInsuranceProvider(
      carInsuranceProvider
    );

    if (emailValid)
      if (passwordValid)
        if (yearValid)
          if (makeValid)
            if (modelValid)
              if (licenseValid)
                if (licensePlateValid)
                  if (CIPValid)
                    if (ageValid)
                      if (ssnValid)
                        // Draft Registeration Data
                        // To Next Steps
                        props.navigation.navigate("phoneVerification");
                      else
                        Alert.alert(
                          "Validation Error",
                          LanguageJSON.INVALID_SSN
                        );
                    else
                      Alert.alert("Validation Error", LanguageJSON.INVALID_AGE);
                  else
                    Alert.alert("Validation Error", LanguageJSON.INVALID_CIP);
                else
                  Alert.alert(
                    "Validation Error",
                    LanguageJSON.INVALID_LICENSE_PLATE
                  );
              else
                Alert.alert(`Validation Error`, LanguageJSON.INVALID_LICENSE);
            else Alert.alert(`Validation Error`, LanguageJSON.INVALID_MODEL);
          else Alert.alert("Validation Error", LanguageJSON.INVALID_MAKE);
        else Alert.alert("Validation Error", LanguageJSON.INVALID_YEAR);
      else Alert.alert(`Validation Error`, LanguageJSON.INVALID_PASSWORD);
    else Alert.alert(`Validation Error`, LanguageJSON.INVALID_EMAIL);
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/logo_2.png")}
          style={styles.logo}
        />
      </View>
      <Animated.View style={[styles.body, !loginMode ? dynamicStyles : null]}>
        <View style={styles.tab}>
          <TouchableWithoutFeedback
            onPress={() => changeLoginMode(0)}
            style={[
              styles.tabButton,
              loginMode ? styles.selectedTab : styles.unselectedTab,
            ]}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => changeLoginMode(1)}
            style={[
              styles.tabButton,
              !loginMode ? styles.selectedTab : styles.unselectedTab,
            ]}
          >
            <Text style={styles.buttonText}>Registeration</Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={[
            styles.loginContainer,
            { display: loginMode ? "flex" : "none" },
          ]}
        >
          <Input
            placeholder="Email"
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
          <Input
            placeholder="Password"
            secureText={secureText}
            type="password"
            onChangeText={(text) => setPassword(text)}
            onEyePress={() => setSecureText(!secureText)}
          />
        </View>
        <View
          style={[
            styles.loginContainer,
            { display: !loginMode ? "flex" : "none" },
          ]}
        >
          <ScrollView style={{ height: height / 3.83 }}>
            <Input placeholder="Name*" onChangeText={(text) => setName(text)} />
            <Input
              placeholder="Email*"
              onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            <Input
              placeholder="Password*"
              type="password"
              secureText={secureText}
              onChangeText={(text) => setPassword(text)}
              onEyePress={() => setSecureText(!secureText)}
            />
            <Input placeholder="Year" onChangeText={(text) => setYear(+text)} />
            <Input placeholder="Make*" onChangeText={(text) => setMake(text)} />
            <Input
              placeholder="Model*"
              onChangeText={(text) => setModel(text)}
            />
            <Input
              placeholder="License Number*"
              onChangeText={(text) => setLicenseNumber(text)}
            />
            <Input
              placeholder="License Plate Number*"
              onChangeText={(text) => setLicensePlateNumber(text)}
            />
            <Input
              placeholder="Car Insurance Provider and Policy Number*"
              onChangeText={(text) => setCarInsuranceProvider(text)}
            />
            <Input
              placeholder="Date of Birth*"
              onChangeText={(text) => setDateOfBirth(text)}
            />
            <Input
              placeholder="Social Security Number*"
              onChangeText={(text) => setSSN(text)}
            />
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.text}>Or Sign up With:</Text>
          <View style={styles.loginButtonContainer}>
            <LoginButton
              image="a"
              onPress={() => handleThirdPartyLogin("apple")}
            />
            <LoginButton
              image="s"
              onPress={() => handleThirdPartyLogin("snapchat")}
            />
            <LoginButton
              image="g"
              onPress={() => handleThirdPartyLogin("google")}
            />
            <LoginButton
              image="f"
              onPress={() => handleThirdPartyLogin("facebook")}
            />
          </View>
          <TouchableOpacity
            onPress={() => (loginMode ? handleLogin() : handleRegister())}
            style={styles.button}
          >
            <Text style={styles.actionButtonText}>
              {loginMode ? "LOGIN" : "REGISTER"}
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) =>
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: {
        user,
      },
    }),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
