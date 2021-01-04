import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { Header, Input } from "../../components";
import { styles } from "./styles";
import * as Contacts from "expo-contacts";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Contact = ({ name, image, imageAvailable, phoneNumber }) => {
  const handleInvite = () => {
    alert(`An Invite Will Be Sent to ${phoneNumber}`);
  };
  return (
    <View style={styles.contact}>
      <View style={styles.contactImage}>
        {imageAvailable ? (
          <Image style={styles.contact_img} source={image} />
        ) : (
          <Text style={styles.largeLetter}>{name?.charAt(0)}</Text>
        )}
      </View>
      <View style={styles.contactText}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <TouchableOpacity onPress={handleInvite} style={styles.inviteBtn}>
        <Text style={styles.btnText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = (props) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
        });

        if (data.length > 0) {
          setContacts(
            data.sort((a, b) => {
              return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
            })
          );
        }
      }
    })();
  }, []);
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header navigation={props.navigation} title="Invite Friends" />
      <View style={styles.search}>
        <Image
          style={styles.searchicon}
          source={require("../../assets/icons/search.png")}
        />
        <View style={styles.searchinput}>
          <Input ContainerWidth="100%" placeholder="Search" />
        </View>
      </View>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <Contact
            image={item.imageAvailable ? item.image : null}
            name={item.name}
            imageAvailable={item.imageAvailable}
            phoneNumber={item.phoneNumbers[0]?.number}
          />
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
