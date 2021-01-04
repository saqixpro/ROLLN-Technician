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

  header: {
    flex: 0.2,
    justifyContent: "center",
  },

  body: {
    flex: 0.9,
  },

  dateText: {
    color: colors.textColor,
    fontSize: 22,
    padding: 5,
  },

  price: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  origin: {
    fontSize: 18,
    color: colors.light_gray,
  },

  addressContainer: {
    flexDirection: "row",
    marginVertical: 5,
    width: 300,
    alignSelf: "center",
    justifyContent: "space-between",
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },

  horizontalList: {
    flexDirection: "row",
  },

  dateContainer: {
    flex: 0.15,
  },
  historyContainer: {
    flex: 0.85,
    padding: 15,
    borderColor: colors.gray,
    borderRadius: 15,
    borderWidth: 1.5,
    marginVertical: 5,
  },
  historyItem: {
    width: width / 1.1,
    alignSelf: "center",
  },
});
