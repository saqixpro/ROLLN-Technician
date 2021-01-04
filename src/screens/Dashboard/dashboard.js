import React from "react";
import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { connect } from "react-redux";
import { styles } from "./styles";
import { Header, ActivityItem } from "../../components";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { colors } from "../../theme/theme";
import Circle from "react-native-progress-circle";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
const dummyDataForSales = [
  { day: "SUN", sales: 350 },
  { day: "MON", sales: 240 },
  { day: "TUE", sales: 260 },
  { day: "WED", sales: 190 },
  { day: "THU", sales: 300 },
  { day: "FRI", sales: 150 },
  { day: "SAT", sales: 201 },
];

const App = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header hideGoBack navigation={props.navigation} title="Dashboard" />
      <View style={styles.body}>
        <View style={styles.activity_large}>
          <View>
            <Text style={styles.title}>Activity</Text>
          </View>
          <View style={styles.activity_body}>
            <ActivityItem
              icon="building"
              text="Income Amount"
              value="$7,135"
              progressColor="#0f0"
              progress={0.55}
            />
            <ActivityItem
              icon="dollar"
              text="Total Sales"
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
        <View style={styles.smallActivityContainer}>
          <View style={styles.small_activity}>
            <View
              style={{
                flex: 0.8,
                alignItems: "center",
              }}
            >
              <View style={styles.smallActivity_income}>
                <Text style={styles.income}>54.3K</Text>
                <Text style={styles.title}> Income</Text>
              </View>
              <Circle
                percent={60}
                radius={70}
                borderWidth={8}
                color="#00ff5f"
                shadowColor="#5f5f5f"
                bgColor={colors.background_secondary}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row-reverse",
                alignItems: "center",
                width: "90%",
                alignSelf: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.5,
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{ ...styles.colorDot, backgroundColor: "#00ff5f" }}
                />
                <Text style={styles.smallActivity_small_text}>Earned</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 0.35,
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{ ...styles.colorDot, backgroundColor: "#5f5f5f" }}
                />
                <Text style={styles.smallActivity_small_text}>Sold</Text>
              </View>
            </View>
          </View>
          <View style={styles.small_activity}>
            <Text style={styles.title}>Activity</Text>
            <View style={styles.smallActivity_item}>
              <Circle
                percent={30}
                radius={30}
                borderWidth={8}
                color="#f44faa"
                shadowColor="#555"
                bgColor={colors.background_secondary}
              />
              <View style={styles.small_activity_text}>
                <Text style={styles.smallActivity_large_text}>$12K</Text>
                <Text style={styles.smallActivity_small_text}>2019</Text>
              </View>
            </View>
            <View style={styles.smallActivity_item}>
              <Circle
                percent={70}
                radius={30}
                borderWidth={8}
                color="#00faaf"
                shadowColor="#555"
                bgColor={colors.background_secondary}
              />
              <View style={styles.small_activity_text}>
                <Text style={styles.smallActivity_large_text}>$64K</Text>
                <Text style={styles.smallActivity_small_text}>2018</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ ...styles.activity_large, height: height / 4 }}>
          <View style={{ flex: 0.1 }}>
            <Text style={styles.title}>Sales</Text>
            <Text style={styles.smallActivity_small_text}>
              Calculated in last 7 Days
            </Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <VictoryBar
              height={150}
              width={width / 1.1}
              animate={{ duration: 1000, onLoad: { duration: 1000 } }}
              cornerRadius={5}
              labels={["S", "M", "T", "W", "T", "F", "S"]}
              style={{
                data: {
                  fill: "#0f0",
                  width: 10,
                },
                labels: { fill: "white" },
              }}
              data={dummyDataForSales}
              x="day"
              y="sales"
            />

            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                width: "100%",
                marginTop: -20,
              }}
            >
              <View style={{ flex: 0.2 }}>
                <TouchableOpacity style={styles.button}>
                  <Entypo
                    name="chevron-up"
                    size={24}
                    color={colors.button_primary}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.7 }}>
                <Text style={styles.title}>Best Selling</Text>
                <Text style={styles.smallActivity_small_text}>Sunday</Text>
              </View>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.title}>28.6K</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
