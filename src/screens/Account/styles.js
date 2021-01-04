import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
  text: { color: colors.textColor },
  largeText: { fontSize: 22, fontWeight: "600", marginVertical: 5 },
  mediumText: { fontSize: 16 },
  grey_text: { color: colors.light_gray },
  header: {
    flex: 0.2,
    backgroundColor: colors.background_secondary,
    paddingHorizontal: 20,
  },
  body: {
    flex: 0.8,
    alignItems: "center",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 8,
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
