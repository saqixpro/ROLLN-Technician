import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Animated,
} from "react-native";
import { connect } from "react-redux";
import { Header } from "../../components";
import { styles } from "./styles";
import MapView, { PROVIDER_GOOGLE, Marker, Circle } from "react-native-maps";
import MapStyle from "../../utils/mapStyle.json";
import * as Location from "expo-location";
import { colors } from "../../theme/theme";
import BottomSheet from "reanimated-bottom-sheet";
import { FlatList, TextInput } from "react-native-gesture-handler";
import AlertModal from './alertModal'

const { width, height } = Dimensions.get("screen");

const BottomSheetContent = ({
  availableRepairs,
  selectedRepair,
  setSelectedRepair,
}) => {
  return (
    <View
      style={{
        flexDirection: height == height / 2 ? "column-reverse" : "column",
        backgroundColor: colors.background_secondary,
        height: 450,
      }}
    >
      <View style={{ flex: 0.5, marginTop: 10 }}>
        <View style={styles.addressContainer}>
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
            }}
          >
            <Image
              source={require("../../assets/icons/address.png")}
              style={styles.icon}
            />
          </View>
          <View
            style={{
              flex: 0.8,
              justifyContent: "center",
              marginHorizontal: 10,
            }}
          >
            <Text style={styles.text2}>{selectedRepair.address}</Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              disabled={!selectedRepair?.available}
              style={{
                ...styles.button,
                backgroundColor: selectedRepair?.available
                  ? colors.button_primary
                  : "#444",
              }}
            >
              <Text style={{ ...styles.text, fontWeight: "600" }}>
                Entrance
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addressContainer}>
          <View
            style={{ flex: 0.1, marginHorizontal: 5, justifyContent: "center" }}
          >
            <Image
              source={require("../../assets/icons/address2.png")}
              style={styles.icon}
            />
          </View>
          <View
            style={{ flex: 0.8, marginHorizontal: 5, justifyContent: "center" }}
          >
            <Text style={[styles.text2, styles.text]}>
              {selectedRepair?.title}
            </Text>
          </View>
        </View>
        <View></View>
      </View>
      <View style={styles.requestContainer}>
        <View style={{ flex: 0.6 }}>
          <FlatList
            data={availableRepairs}
            contentContainerStyle={styles.list}
            horizontal
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedRepair(item)}
                style={styles.repairItem}
              >
                <Image
                  source={
                    item.carType == "car"
                      ? require("../../assets/icons/cartypes/car.png")
                      : item.carType == "jeep"
                      ? require("../../assets/icons/cartypes/jeep.png")
                      : item.carType == "pickup"
                      ? require("../../assets/icons/cartypes/pickup.png")
                      : null
                  }
                  style={styles.carType}
                />
                <Text style={{ ...styles.text, fontWeight: "600" }}>
                  {item.title}
                </Text>
                <Text style={{ ...styles.text, fontWeight: "600" }}>
                  {item.budget}$
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            flex: 0.6,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.buttonText}>ACCEPT REPAIR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const App = (props) => {
  const [location, setLocation] = useState(null);
  const sheetRef = useRef(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [availableRepairs, setAvailableRepairs] = useState([
    {
      id: 1,
      carType: "car",
      title: "Diagnosis",
      budget: 150,
      address: "144 Broughton Ave, Bloomfield",
      available: true,
      coords: {
        accuracy: 153.36119714376395,
        altitude: 593.2519073486328,
        altitudeAccuracy: 10,
        heading: -1,
        latitude: 33.739705,
        longitude: 71.51782,
        speed: -1,
      },
    },
    {
      id: 2,
      carType: "jeep",
      title: "Pre Purch",
      budget: 200,
      address: "135 Huston Taxes, California",
      available: false,
      coords: {
        accuracy: 153.36119714376395,
        altitude: 593.2519073486328,
        altitudeAccuracy: 10,
        heading: -1,
        latitude: 33.731431,
        longitude: 71.515256,
        speed: -1,
      },
    },
    {
      id: 3,
      carType: "pickup",
      title: "Rouline",
      budget: 80,
      address: "142, San Jose, California",
      available: true,
      coords: {
        accuracy: 153.36119714376395,
        altitude: 593.2519073486328,
        altitudeAccuracy: 10,
        heading: -1,
        latitude: 33.7343,
        longitude: 71.513034,
        speed: -1,
      },
    },
    {
      id: 4,
      carType: "car",
      title: "Engine Problem",
      budget: 200,
      address: "135, Desert Fields, Mojave",
      available: true,
      coords: {
        accuracy: 153.36119714376395,
        altitude: 593.2519073486328,
        altitudeAccuracy: 10,
        heading: -1,
        latitude: 33.73721235284343,
        longitude: 71.511934,
        speed: -1,
      },
    },
  ]);

  const [selectedRepair, setSelectedRepair] = useState(availableRepairs[0]);
  const [headerAlignment] = useState(new Animated.Value(0));

  const animateHeader = (val) => {
    Animated.timing(headerAlignment, {
      toValue: val,
      duration: 500,
      useNativeDriver: true
    }).start()
  }

  const headerIntropolate = headerAlignment.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -height / 2]
  })

  const animatedHeader = {
    transform: [
      {
        translateY: headerIntropolate
      }
    ]
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);


  useEffect(() => {
    if (alertVisible) {
      sheetRef.current.snapTo(2);
      animateHeader(1);
    } else {
      sheetRef.current.snapTo(0);
      animateHeader(0)
    }
  }, [alertVisible])

 const onSubmit_CompleteRepair = () => {
    setAlertVisible(false)
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, animatedHeader]}>
        <View style={styles.horizontalContainer}>
          <View style={{ flex: 0.27 }}>
            <TouchableOpacity
              onPress={() => props.navigation.openDrawer()}
              style={styles.drawerIcon}
            >
              <Image
                source={require("../../assets/icons/hamburger.png")}
                style={{ width: 70, height: 70 }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.8 }}>
            <View>
              <Image
                source={require("../../assets/logo.png")}
                style={styles.logo}
              />
            </View>
          </View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image source={require("../../assets/icons/nav.png")} />
            </TouchableOpacity>
          </View>
          <View style={[{ flex: 0.9 }, styles.searchBar]}>
            <TextInput
              style={{ marginLeft: Platform.OS == "android" ? 10 : 0 }}
              placeholder="Enter Your Vehicle Location"
              placeholderTextColor={colors.light_gray}
            />
          </View>
        </View>
      </Animated.View>
      {location ? (
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={location?.coords}
          followsUserLocation
          customMapStyle={MapStyle}
          style={styles.maps}
        >
          {availableRepairs.map((item) => (
            <Marker
              onPress={() => setSelectedRepair(item)}
              style={{ width: 50, height: 50 }}
              coordinate={item.coords}
            >
              <Image
                source={require("../../assets/icons/car_marker.png")}
                style={[
                  styles.marker,
                  {
                    transform: [
                      {
                        scale: 0.8,
                      },
                      {
                        rotateZ:
                          Math.floor(Math.random() * 360).toString() + "deg",
                      },
                    ],
                  },
                ]}
              />
            </Marker>
          ))}
          <Marker coordinate={location?.coords} onPress={() => setAlertVisible(!alertVisible)}>
            <Image
              source={require("../../assets/navIcon.png")}
              style={{ width: width / 3.5, height: width / 3.5 }}
            />
          </Marker>
        </MapView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.background,
          }}
        >
          <ActivityIndicator size="small" color={colors.button_primary} />
        </View>
        )}

      <BottomSheet
        ref={sheetRef}
        enabledBottomInitialAnimation
        snapPoints={[height / 4, height / 2, height / 12]}
        borderRadius={25}
        renderContent={() => (
          <BottomSheetContent
            availableRepairs={availableRepairs}
            selectedRepair={selectedRepair}
            setSelectedRepair={setSelectedRepair}
          />
        )}
      />
      <AlertModal visible={alertVisible} onSubmit={onSubmit_CompleteRepair} />

    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
