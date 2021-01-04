import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flex: 0.2,
    justifyContent: "center",
    backgroundColor: colors.background_secondary,
  },
  text: {
    color: colors.textColor,
  },
  greyText: {
    color: colors.light_gray,
  },
  body: {
    flex: 0.8,
  },
  settingButton: {
    flexDirection: "row",
    width: width / 1.1,
    alignSelf: "center",
    paddingHorizontal: 20,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: colors.background,
    shadowColor: colors.gray,
    shadowOffset: { width: -3, height: -3 },
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 9,
    shadowOpacity: 0.9,
    shadowRadius: 10,
  },
});
