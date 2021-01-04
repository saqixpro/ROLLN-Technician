import React from "react";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { colors } from "../theme/theme";

const App = ({ image, onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <Image
        source={
          image == "a"
            ? require("../assets/icons/apple.png")
            : image == "s"
            ? require("../assets/icons/snapchat.png")
            : image == "g"
            ? require("../assets/icons/google.png")
            : image == "f"
            ? require("../assets/icons/facebook.png")
            : { uri: image }
        }
        style={styles.image}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: colors.gray,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});

export default App;
