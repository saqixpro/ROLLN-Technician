import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  selectedTab: {
    shadowOffset: {
      width: 1,
      height: -3,
    },
  },
  unselectedTab: {
    opacity: 0.5,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },

  logoContainer: {
    flex: Platform.OS == "ios" ? 0.4 : 0.3,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    transform: [
      {
        scale: 0.7,
      },
    ],
  },
  body: {
    flex: Platform.OS == "ios" ? 0.6 : 0.7,
    backgroundColor: colors.background_secondary,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  tab: {
    flexDirection: "row",
    width,
  },
  tabButton: {
    width: width / 2,
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.background_secondary,
    shadowColor: Platform.OS == "ios" ? colors.gray : colors.light_gray,
    shadowOpacity: 0.9,
    elevation: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  text: {
    color: colors.light_gray,
    alignSelf: "center",
    fontSize: 16,
    marginVertical: 10,
  },
  loginContainer: {
    marginTop: 20,
    flex: 0.4,
  },
  bottomContainer: {
    flex: 0.6,
  },
  loginButtonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#0fdf0f",
    width: width / 1.2,
    alignSelf: "center",
    padding: Platform.OS == "ios" ? 20 : 15,
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  actionButtonText: {
    color: colors.textColor,
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
  },
});
