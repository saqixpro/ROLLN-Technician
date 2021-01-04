import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
  },
  title: {
    color: colors.textColor,
    fontSize: 20,
    fontWeight: "600",
    padding: 20,
  },
  header: {
    width: "75%",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: height / 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: width / 1.1,
    marginVertical: 10,
    alignSelf: "center",
    borderRadius: 15,
    borderColor: colors.gray,
    borderWidth: 2,
    padding: 15,
    alignItems: "center",
    shadowColor: colors.gray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    elevation: 8,
    flexDirection: "row",
  },
  bottomView: {
    borderColor: colors.gray,
    borderWidth: 2,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  msg: {
    width: "65%",
    marginRight: 20,
    fontSize: 18,
    color: colors.textColor,
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
  },
  // OTP Screen Styles
  otpModal: {
    backgroundColor: colors.background,
    flex: 1,
  },
  otpTitle: {
    color: colors.textColor,
    fontWeight: "400",
    fontSize: 25,
  },
  otpSubTitle: {
    color: colors.light_gray,
    fontSize: 16,
  },
  otpTitleWrapper: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.button_primary,
    padding: 15,
    borderRadius: 12,
    width: width / 1.25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "400",
    textTransform: "uppercase",
  },
});
