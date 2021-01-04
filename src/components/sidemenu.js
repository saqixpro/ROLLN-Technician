import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { ActionTypes } from "../constants";
import { colors } from "../theme/theme";

const { width } = Dimensions.get("screen");

const Icons = {
  home: require("../assets/icons/home.png"),
  payment: require("../assets/icons/payment_history.png"),
  repair: require("../assets/icons/repair_history.png"),
  invite: require("../assets/icons/invite_friends.png"),
  settings: require("../assets/icons/settings.png"),
  support: require("../assets/icons/online_support.png"),
  logout: require("../assets/icons/log_out.png"),
};

const SideButton = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sideButton}>
      <View style={styles.btnImage}>
        <Image style={styles.icon} source={image} />
      </View>
      <View style={styles.btnText}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const App = (props) => {
  const handleLogOut = () => {
    props.logOut();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={{ uri: props.currentUser?.avatar }}
          />
        </View>
        <View style={styles.textView}>
          <Text style={[styles.text, styles.title]}>
            {props.currentUser ? props.currentUser?.name : props.tempUser?.name}
          </Text>
          <Text style={styles.subText}>
            {props.currentUser
              ? props.currentUser?.address
              : props.tempUser?.address}
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <SideButton
          title="Home"
          onPress={() => props.navigation.navigate("homeScreen")}
          image={Icons.home}
        />
        <SideButton
          title="Payment History"
          onPress={() => props.navigation.navigate("payments")}
          image={Icons.payment}
        />
        <SideButton
          title="Repair History"
          onPress={() => props.navigation.navigate("repairHistory")}
          image={Icons.repair}
        />
        <SideButton
          title="Invite Friends"
          onPress={() => props.navigation.navigate("invite")}
          image={Icons.invite}
        />
        <SideButton
          onPress={() => props.navigation.navigate("settings")}
          title="Settings"
          image={Icons.settings}
        />
        <SideButton title="Online Support" image={Icons.support} />
        <SideButton
          title="Log Out"
          onPress={handleLogOut}
          image={Icons.logout}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch({ type: ActionTypes.LOGOUT_USER }),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: "500",
  },

  subText: {
    color: colors.light_gray,
    fontSize: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    paddingVertical: 5,
  },

  header: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 0.8,
    paddingVertical: 20,
  },
  imageView: {
    flex: 0.3,
    alignItems: "center",
  },
  textView: {
    flex: 0.7,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  sideButton: {
    marginVertical: 5,
    maxHeight: 70,
    flexDirection: "row",
    width: width / 1.35,
  },

  btnText: {
    justifyContent: "center",
  },
  btnImage: {
    alignItems: "center",
    justifyContent: "center",
  },
});
