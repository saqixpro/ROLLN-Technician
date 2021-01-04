import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    width,
    height: Platform.OS == "ios" ? height / 1.2 : height / 1.28,
    backgroundColor: colors.background_secondary,
    position: "absolute",
    left: 0,
    bottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderColor: colors.gray,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -0.1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
  activity_large: {
    width: "95%",
    alignSelf: "center",
    height: Platform.OS == "android" ? height / 3.8 : height / 3.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    marginVertical: 10,
    backgroundColor: colors.background_secondary,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -0.1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    padding: 10,
  },
  title: {
    color: colors.textColor,
    fontSize: 16,
    fontWeight: "600",
  },

  smallActivityContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  small_activity: {
    flex: 0.5,
    marginHorizontal: 10,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 200,
    borderRadius: 12,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -0.1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    padding: 10,
  },
  smallActivity_item: {
    flexDirection: "row",
    marginVertical: 7,
    width: "80%",
    justifyContent: "space-around",
  },
  smallActivity_large_text: {
    fontSize: 18,
    color: colors.textColor,
    fontWeight: "bold",
  },
  smallActivity_small_text: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.light_gray,
  },
  small_activity_text: {
    justifyContent: "center",
    paddingTop: 8,
  },
  colorDot: {
    width: 10,
    height: 10,
    marginTop: 5,
  },
  smallActivity_income: {
    position: "absolute",
    top: 50,
    left: 40,
    zIndex: 100,
  },
  income: {
    fontSize: 22,
    color: colors.textColor,
    fontWeight: "700",
  },
  button: {
    backgroundColor: colors.background_secondary,
    shadowColor: colors.gray,
    shadowOffset: {
      width: 0,
      height: -0.1,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  activity_body: {
    flex: 1,
  },
});
