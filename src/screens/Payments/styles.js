import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "flex-end",
  },
  text: {
    color: colors.textColor,
    fontSize: 16,
  },
  body: {
    flex: 0.8,
    backgroundColor: colors.background,
    shadowColor: colors.gray,
    shadowOffset: { width: -3, height: -3 },
    shadowOpacity: 0.5,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    elevation: 8,
    alignItems: "center",
  },
  activity_large: {
    marginTop: height / 15,
    width: "95%",
    alignSelf: "center",
    height: height / 3.5,
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
  activity_body: {
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: colors.light_gray,
    borderRadius: 10,
  },
  horizontalList: {
    flexDirection: "row",
  },
  price: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
  },

  origin: {
    fontSize: 15,
    color: colors.light_gray,
  },
  historyItem: {
    width: width / 1.1,
    alignSelf: "center",
  },
  dateContainer: {
    flex: 0.15,
  },
  listStyle: {
    flex: 0.4,
  },
  title_large: {
    fontSize: 20,
    color: colors.textColor,
  },
  titleContainer: {
    width: width / 1.15,
    marginVertical: 10,
  },
  addressContainer: {
    flexDirection: "row",
    marginVertical: 5,
    width: 300,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  historyContainer: {
    flex: 0.85,
    padding: 15,
    borderColor: colors.gray,
    borderRadius: 15,
    borderWidth: 1.5,
    marginVertical: 5,
  },
  buttonContainer: {
    width: width / 1.1,
    alignItems: "center",
    backgroundColor: colors.light_gray,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.button_primary,
    padding: width / 25,
    paddingHorizontal: width / 18,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
