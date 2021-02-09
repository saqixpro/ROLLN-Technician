import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { LoginScreen, PhoneVerification, PaymentInfo } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App = (props) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Screen name="loginScreen" component={LoginScreen} />
      <Screen name="phoneVerification" component={PhoneVerification} />
      <Screen name="paymentInfo" component={PaymentInfo} />
    </Navigator>
  );
};

export default App;
