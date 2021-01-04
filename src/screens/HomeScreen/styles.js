import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.textColor,
  },
  text2: {
    color: colors.gray,
    fontSize: 16,
  },
  maps: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: height / 4,
    zIndex: 20,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    elevation: 8,
    paddingTop: 20,
    backgroundColor: "rgba(27, 35, 44, 0.7)",
  },
  requestContainer: {
    flex: 0.9,
    width,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginHorizontal: 5,
    paddingVertical: 20,
  },
  addressContainer: {
    flexDirection: "row",
    marginVertical: height / 60,
    width: width / 1.05,
    alignSelf: "center",
  },

  icon: {
    width: 30,
    height: 30,
  },
  button: {
    padding: 10,
    borderRadius: 20,
  },
  repairItem: {
    borderColor: colors.textColor,
    borderWidth: 1,
    height: height / 8,
    width: width / 3.5,
    marginHorizontal: 5,
    borderRadius: 8,
    marginVertical: 10,
    padding: 10,
  },
  carType: {
    transform: [
      {
        scale: 1.1,
      },
    ],
    marginVertical: 10,
  },
  actionButton: {
    backgroundColor: colors.button_primary,
    padding: 20,
    width: width / 1.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    width,
  },
  logo: {
    transform: [
      {
        scale: 0.5,
      },
    ],
  },
  drawerIcon: {
    width: 50,
    height: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.background_secondary,
    shadowColor: colors.gray,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  searchBar: {
    backgroundColor: colors.background,
    shadowColor: colors.gray,
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.9,
    shadowRadius: 0,
    padding: 20,
    borderRadius: 20,
    color: colors.textColor,
    fontSize: 16,
  },
});
