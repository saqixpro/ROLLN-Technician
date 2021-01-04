import React from "react";
import { MainNav } from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <MainNav />
    </Provider>
  );
}
