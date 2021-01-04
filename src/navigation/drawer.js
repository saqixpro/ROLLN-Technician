import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppStack from "./appStack";
import { Dimensions } from "react-native";
const { Navigator, Screen } = createDrawerNavigator();
const { width } = Dimensions.get("screen");
import { SideMenu } from "../components";

export const Drawer = ({}) => {
  return (
    <Navigator
      drawerContent={(props) => <SideMenu {...props} />}
      drawerStyle={{ width: width / 1.3 }}
      initialRouteName="AppStack"
    >
      <Screen name="AppStack" component={AppStack} />
    </Navigator>
  );
};
