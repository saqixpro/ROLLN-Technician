import React, { useState } from "react";
import { Text, View, Image, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { connect } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { colors } from "../../theme/theme";
import { BackButton } from "../../components";

const Stars = (val) => {
  const value = Math.round(val);
  const Colors = [
    colors.gray,
    colors.gray,
    colors.gray,
    colors.gray,
    colors.gray,
  ];

  for (let i = 0; i < value; i++) {
    Colors[i] = colors.button_primary;
  }

  return Colors;
};

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
      <Text style={styles.grey_text}>{value}</Text>
    </View>
    <View style={{ flex: backNav ? 0.3 : 0.1, marginLeft: value ? 10 : 0 }}>
      {backNav ? (
        <Image
          source={require("../../assets/icons/navigation_back.png")}
          style={styles.img}
        />
      ) : (
        <Entypo name="chevron-right" size={22} color={colors.button_primary} />
      )}
    </View>
  </TouchableOpacity>
);

const App = (props) => {
  const starColor = Stars(props.currentUser?.stars);
  const [options, setOptions] = useState([
    {
      title: "Email",
      onPress: () => alert(`Will Be Redirected To Email Edit`),
      backNav: false,
      value: null,
    },
    {
      title: "Phone",
      onPress: () => alert(`Will Be Redirected To Phone Edit`),
      backNav: true,
      value: null,
    },
    {
      title: "Home Address",
      onPress: () => alert(`Will Be Redirected To Address Edit`),
      backNav: false,
      value: props.currentUser?.address,
    },
    {
      title: "Direct Deposit",
      onPress: () => alert(`Will Be Redirected To Deposit Screen`),
      backNav: true,
      value: null,
    },
    {
      title: "Account Number",
      onPress: () => alert(`Will Be Redirected To Account Number Edit`),
      backNav: true,
      value: null,
    },
    {
      title: "Routing Number",
      onPress: () => alert(`Will Be Redirected To Routing Number Edit`),
      backNav: false,
      value: "English",
    },
    {
      title: "Emergency Contact",
      onPress: () => alert(`Will Be Redirected To Emergency Contact Edit`),
      backNav: true,
      value: null,
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView />
        <View style={{ flex: 0.4, flexDirection: "row" }}>
          <View style={{ flex: 0.2 }}>
            <BackButton navigation={props.navigation} />
          </View>
          <View style={{ flexDirection: "row", flex: 0.8 }}>
            <View style={{ flex: 0.2, marginHorizontal: 10 }}>
              <Image
                source={{ uri: props.currentUser?.avatar }}
                style={styles.avatar}
              />
            </View>
            <View style={{ flex: 0.6, marginHorizontal: 10 }}>
              <Text style={[styles.text, styles.largeText]}>
                {props.currentUser?.name}
              </Text>
              <Text style={[styles.grey_text, styles.mediumText]}>
                {props.currentUser?.address}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.2 }}></View>
        <View style={{ flex: 0.4 }}>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            {starColor.map((color) => (
              <FontAwesome
                style={{ marginHorizontal: 3 }}
                name="star"
                size={30}
                color={color}
              />
            ))}
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <SettingButton
              value={item.value}
              title={item.title}
              backNav={item.backNav}
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
