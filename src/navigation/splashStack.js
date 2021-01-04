import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Onboarding, SplashScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App = (props) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Screen name="splash" component={SplashScreen} />
      <Screen name="onboarding" component={Onboarding} />
    </Navigator>
  );
};

export default App;
