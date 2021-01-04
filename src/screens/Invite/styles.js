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
    fontSize: 16,
  },
  search: {
    flexDirection: "row",
    height: 90,
    padding: 10,
  },
  searchinput: {
    flex: 1,
    alignSelf: "flex-end",
  },
  searchicon: {
    flex: 0.2,
    marginTop: -15,
    marginLeft: -15,
  },
  contact: {
    borderColor: colors.gray,
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 15,
    marginVertical: 5,
    width: width / 1.05,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contactImage: {
    flex: 0.2,
    width: 55,
    height: 55,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  contact_img: {
    width: "100%",
    height: "100%",
  },
  largeLetter: {
    fontSize: 30,
    fontWeight: "600",
  },
  contactText: {
    flex: 0.6,
  },
  inviteBtn: {
    flex: 0.2,
    backgroundColor: colors.button_primary,
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 15,
  },
});
