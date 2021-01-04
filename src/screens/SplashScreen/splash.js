import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const App = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("onboarding");
    }, 2500);
  }, []);
  return (
    <ImageBackground
      style={{ ...StyleSheet.absoluteFill }}
      source={require("../../../assets/Splash.png")}
    />
  );
};

export default App;
