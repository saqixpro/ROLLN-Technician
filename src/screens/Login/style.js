import { Dimensions, StyleSheet } from "react-native";
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
    flex: 0.4,
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
    flex: 0.6,
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
    shadowColor: colors.gray,
    shadowOpacity: 0.9,
    elevation: 8,
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
    padding: 20,
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
