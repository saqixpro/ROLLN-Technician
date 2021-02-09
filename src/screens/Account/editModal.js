import React from 'react';
import { Button, Image, KeyboardAvoidingView, Modal, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '../../components';
import { colors } from '../../theme/theme';
import { height, width } from '../DirectDeposit/styles';
import { Modes } from './modalModes';


const App = ({currentUser, visible, mode, changeMode }) => {

    const fetchCurrentData = () => {
        switch (mode) {
            case Modes.EMAIL:
                return currentUser?.email || "";
            case Modes.PHONE:
                return currentUser?.phone || "";
            case Modes.ROUTING_NUMBER:
                return currentUser?.depositInfo?.routingNumber || "";
            case Modes.EMERGENCY_CONTACT:
                return currentUser?.emergencyContact || "";
            case Modes.HOME_ADDRESS:
                return currentUser?.address || "";
            case Modes.ACCOUNT_NUMBER:
                return currentUser?.depositInfo?.accountNumber || "";
            default: return null;
        }
    }

    return (
        <Modal visible={visible} presentationStyle="formSheet">
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => changeMode(Modes.EMPTY)}>
                        <Image source={require('../../assets/icons/cancel.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <KeyboardAvoidingView behavior="padding">
                    <View style={{width: '100%', marginVertical: 10, padding: 20}}>
                            <Text style={styles.text}>Current {mode} : { fetchCurrentData() }</Text>
                  </View>
                    <Input placeholder={mode + "..."} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SAVE</Text>
                    </TouchableOpacity>
                  </KeyboardAvoidingView>
              </View>
           </View>
        </Modal>
    )
}


export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background_secondary
    },
    header: {
        flex: 0.25,
        alignItems: 'flex-end'
    },
    body: {
        flex: 0.8,
        alignItems: 'center'
    },
    text: {
        color: colors.textColor
    },
    button: {
        backgroundColor: colors.button_primary,
        padding: 20,
        width: width / 1.2,
        borderRadius: 10,
        marginVertical: height / 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600'
    }
})