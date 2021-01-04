import React from "react";
import { Text, View, Image, Alert, Platform } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Header } from "../../components";
import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";
import { colors } from "../../theme/theme";
import { useState } from "react/cjs/react.development";

const SettingButton = ({ title, value, backNav, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.settingButton, { paddingVertical: backNav ? 10 : 20 }]}
  >
    <View
      style={{
        flex: value ? 0.9 : 1,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.greyText}>{value}</Text>
    </View>
    <View style={{ flex: backNav ? 0.3 : 0.1, marginLeft: value ? 10 : 0 }}>
      {backNav ? (
        <Image source={require("../../assets/icons/navigation_back.png")} />
      ) : (
        <Entypo name="chevron-right" size={22} color={colors.button_primary} />
      )}
    </View>
  </TouchableOpacity>
);

const App = (props) => {
  const [options, setOptions] = useState([
    {
      title: "Account Information",
      onPress: () => props.navigation.navigate("Account"),
      backNav: false,
      value: null,
    },
    {
      title: "Invite Friends",
      onPress: () => props.navigation.navigate("invite"),
      backNav: true,
      value: null,
    },
    {
      title: "Payment Information",
      onPress: () => props.navigation.navigate("payments"),
      backNav: true,
      value: null,
    },
    {
      title: "Home Address",
      onPress: () => props.navigation.navigate("Account"),
      backNav: false,
      value: props.currentUser?.address,
    },
    {
      title: "Repair History",
      onPress: () => props.navigation.navigate("repairHistory"),
      backNav: true,
      value: null,
    },
    {
      title: "Language",
      onPress: () =>
        Alert.alert(
          `Support`,
          "Currently Only English is Supported, More Languages Coming Soon..."
        ),
      backNav: false,
      value: "English",
    },
    {
      title: "Support",
      onPress: () =>
        Alert.alert(`Support`, "You will be redirected to support website"),
      backNav: true,
      value: null,
    },
    {
      title: "Log Out",
      onPress: () => logOut(),
      backNav: true,
      value: null,
    },
  ]);

  const logOut = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Settings" navigation={props.navigation} />
      </View>
      <View style={styles.body}>
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <SettingButton
              title={item.title}
              value={item.value}
              backNav={Platform.OS !== "android" ? item.backNav : false}
              onPress={item.onPress}
            />
          )}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
