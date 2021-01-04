import React from "react";
import { connect } from "react-redux";
import { LoginStates } from "../constants";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import SplashStack from "./splashStack";
import { Drawer } from "./drawer";

const App = (props) => {
  return (
    <NavigationContainer>
      {props.loginState == LoginStates.LOGGED_IN ? (
        <Drawer />
      ) : props.loginState == LoginStates.LOGGED_OUT ? (
        <AuthStack />
      ) : (
        <SplashStack />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
