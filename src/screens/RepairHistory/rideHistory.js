import React, { useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { Header } from "../../components";
import { colors } from "../../theme/theme";
import { styles } from "./styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useEffect } from "react/cjs/react.development";

const Stars = (val) => {
  const Colors = [
    colors.gray,
    colors.gray,
    colors.gray,
    colors.gray,
    colors.gray,
  ];

  for (let i = 0; i < val; i++) {
    Colors[i] = colors.button_primary;
  }

  return Colors;
};

const RenderItem = ({ item, index }) => {
  const stars = Stars(item.repairs[0].stars);
  return (
    <View style={styles.historyItem}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      {item.repairs.map((repair) => (
        <View style={styles.historyContainer}>
          <View style={styles.horizontalList}>
            <View style={{ flex: 0.2 }}>
              <Image
                source={require("../../assets/profile.jpg")}
                style={styles.image}
              />
            </View>
            <View style={{ flex: 0.6, flexDirection: "row" }}>
              {stars.map((color) => (
                <View style={{ justifyContent: "center" }}>
                  <FontAwesome name="star" size={20} color={color} />
                </View>
              ))}
            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
              <Text style={[styles.text, styles.price]}>${repair.price}</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={styles.addressContainer}>
              <FontAwesome
                name="clipboard"
                color={colors.light_gray}
                size={18}
              />
              <Text style={styles.origin}>{repair.description}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Ionicons
                name="md-navigate-sharp"
                color={colors.button_primary}
                size={20}
              />
              <Text style={styles.origin}>{repair.location}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const App = (props) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    (() => {
      setHistory(props.currentUser?.repairs);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header navigation={props.navigation} title="Repair History" />
      </View>
      <View style={styles.body}>
        <FlatList data={history} renderItem={RenderItem} />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
