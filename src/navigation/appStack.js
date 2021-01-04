import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  AccountScreen,
  Dashboard,
  HomeScreen,
  InviteFriends,
  PaymentScreen,
  RepairHistory,
  SettingsScreen,
} from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App = (props) => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Screen name="dashboard" component={Dashboard} />
      <Screen name="homeScreen" component={HomeScreen} />
      <Screen name="invite" component={InviteFriends} />
      <Screen name="repairHistory" component={RepairHistory} />
      <Screen name="payments" component={PaymentScreen} />
      <Screen name="settings" component={SettingsScreen} />
      <Screen name="Account" component={AccountScreen} />
    </Navigator>
  );
};

export default App;
