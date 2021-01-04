import React, { useState } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Header, ActivityItem } from "../../components";
import { styles } from "./styles";
import { colors } from "../../theme/theme";

const RepairRender = ({ item, index }) => {
  return (
    <View style={styles.historyItem}>
      {item.repairs.map((repair) => (
        <View style={styles.historyContainer}>
          <View style={styles.horizontalList}>
            <View style={{ flex: 0.2 }}>
              <View style={styles.image}>
                <Image
                  source={require("../../assets/carIcon.png")}
                  style={{ transform: [{ scale: 0.5 }] }}
                />
              </View>
            </View>

            <View style={{ flex: 0.6 }}>
              <Text style={styles.origin}>{repair.description}</Text>
              <Text style={styles.origin}>{repair.location}</Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
              <Text style={[styles.text, styles.price]}>${repair.price}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const App = (props) => {
  const [repairHistory, setRepairHistory] = useState([
    {
      date: "12/04/2020",
      repairs: [
        {
          price: 45,
          stars: 4,
          description: "Nawascut Repair",
          location: "92 South Street, NY",
        },
        {
          price: 45,
          stars: 4,
          description: "Complete Engine Replace",
          location: "92 South Street, NY",
        },
      ],
    },
    {
      date: "12/04/2020",
      repairs: [
        {
          price: 45,
          stars: 4,
          description: "Steering Wheel Repair",
          location: "92 South Street, NY",
        },
        {
          price: 45,
          stars: 4,
          description: "Suspension Repairs",
          location: "92 South Street, NY",
        },
      ],
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{ flex: 0.2 }}>
        <Header navigation={props.navigation} title="Payments" />
      </View>
      <View style={styles.body}>
        <View style={styles.activity_large}>
          <View>
            <Text style={styles.title}>Activity</Text>
          </View>
          <View style={styles.activity_body}>
            <ActivityItem
              icon="building"
              text="Total Sales"
              value="$7,135"
              progressColor="#0f0"
              progress={0.55}
            />
            <ActivityItem
              icon="dollar"
              text="Income Amount"
              value="$15,960"
              progress={0.8}
              progressColor="#00faf0"
            />
            <ActivityItem
              icon="check"
              text="Completed Repairs"
              progress={0.5}
              value="114"
              progressColor="#f00af0"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Withdraw Funds</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title_large}>Repairs</Text>
        </View>
        <FlatList
          style={styles.listStyle}
          data={repairHistory}
          renderItem={({ item }) => <RepairRender item={item} />}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
