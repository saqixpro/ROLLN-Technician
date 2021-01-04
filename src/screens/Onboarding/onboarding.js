import React, { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { connect } from "react-redux";
import Swiper from "react-native-swiper";
import { colors } from "../../theme/theme";

import { WebView } from "react-native-webview";
import StaticLinks from "../../constants/web_links.json";
import { ActionTypes } from "../../constants";
const { width, height } = Dimensions.get("screen");

const App = (props) => {
  const [modalVisible, setModalVisibility] = useState(false);
  const handleAgreementLink = () => setModalVisibility(true);

  const handleIndexChange = (index) =>
    index == 1 ? setModalVisibility(true) : null;

  return (
    <Swiper
      style={styles.wrapper}
      contentContainerStyle={{ width, height }}
      loop={false}
      showsButtons={false}
      onIndexChanged={(index) => handleIndexChange(index)}
    >
      <ImageBackground
        source={require("../../assets/ob_background.png")}
        style={styles.slide1}
        width={"100%"}
        height={"100%"}
      >
        <SafeAreaView />
        <View
          style={{
            flex: 0.3,
            width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/logo.png")} />
        </View>
        <View
          style={{
            width,
            alignItems: "center",
            flex: 0.4,
          }}
        >
          <Image source={require("../../assets/Illustration.png")} />
        </View>
        <View style={{ flex: 0.4, width: width / 1.2 }}>
          <Image
            style={{
              transform: [
                {
                  scale: 0.9,
                },
              ],
            }}
            source={require("../../assets/Text.png")}
          />
        </View>
      </ImageBackground>
      <ImageBackground
        source={require("../../assets/ob_background.png")}
        style={styles.slide2}
      >
        <SafeAreaView />
        <View
          style={{
            flex: 0.2,
            width,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/logo.png")} />
        </View>

        <View
          style={{ flex: 0.6, justifyContent: "flex-end", width: width / 1.2 }}
        >
          <TouchableWithoutFeedback onPress={handleAgreementLink}>
            <Image
              style={{
                transform: [
                  {
                    scale: 0.9,
                  },
                ],
              }}
              source={require("../../assets/agreement.png")}
            />
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flex: 0.1,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => props.logOut()}
            style={styles.button}
          >
            <Text style={styles.btnText}>I Agree</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={modalVisible}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View
            style={{
              ...StyleSheet.absoluteFill,
              backgroundColor: colors.background,
            }}
          >
            <TouchableOpacity
              onPress={() => setModalVisibility(false)}
              style={styles.smallButton}
            >
              <Image source={require("../../assets/icons/cancel.png")} />
            </TouchableOpacity>
            <WebView
              startInLoadingState={true}
              renderLoading={() => (
                <View
                  style={{
                    ...StyleSheet.absoluteFill,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: colors.background,
                  }}
                >
                  <ActivityIndicator
                    size="large"
                    color={colors.button_primary}
                  />
                </View>
              )}
              source={{ uri: StaticLinks.CONTRACTOR_AGREEMENT_CUSTOMER }}
              style={{ width: "100%", height: "80%" }}
            />
          </View>
        </Modal>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    width: width + 30,
    height: height + 60,
    backgroundColor: colors.background,
    position: "absolute",
    left: -30,
    alignItems: "center",
    top: -35,
    right: -20,
    bottom: -50,
  },

  slide2: {
    width: width + 30,
    height: height + 60,
    backgroundColor: colors.background,
    position: "absolute",
    left: -10,
    alignItems: "center",
    top: -35,
    right: -20,
    bottom: -50,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: colors.button_primary,
    width: width / 1.3,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    color: colors.textColor_dark,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  smallButton: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch({ type: ActionTypes.LOGOUT_USER }),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
