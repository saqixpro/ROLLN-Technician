import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, Image, Animated, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '../../components';
import { ActionTypes } from '../../constants';
import { colors } from '../../theme/theme';
import { styles, width, height } from './styles';
import {connect} from 'react-redux'

const App = (props) => {
    const [alignment] = useState(new Animated.Value(0));
    const [inFocus, setFocus] = useState(false);
    const [address, setAddress] = useState("");
    const [bankName, setBankName] = useState("");
    const [routingNumber, setRoutingNumber] = useState("");
    const [accountNumber, setAccountNumber] = useState("");

 

  
    

    const animateLayout = (val) => Animated.spring(alignment, {
        toValue: val,
        useNativeDriver: true,
        tension: 160,
        friction: 9
    }).start()

    useEffect(() => {
        animateLayout(inFocus ? 1 : 0)
    }, [inFocus])



    const LayoutIntropolate = alignment.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -height / 2.7]
    })

    const ScreenLayout = {
        transform: [
            {
                translateY: LayoutIntropolate
            }
        ]
    }



    const DirectDeposit = () => {
        if (accountNumber && routingNumber && bankName && address) {
            
            // Deposit Function

            Alert.alert(`The Deposit Function is Not Activated yet`);

        } else Alert.alert('Information Incomplete', "Please Provide All Info To Complete The Process");
    }





 


    return (
        <Animated.View style={[styles.container, ScreenLayout]}>
            <View style={[styles.cardsContainer]}>
                <Image style={styles.card} source={require('../../assets/payment_card_grey.png')} />
                <ImageBackground resizeMethod="scale" source={require('../../assets/payment_card.png')} style={styles.paymentCard}>
                    <View style={ styles.numberContainer }>
                        <Text style={{ ...styles.text, width: '37%' }}>{ props.CCInfo?.cardNumber}</Text>
                    </View>
                    <View style={styles.expContainer}>
                        <Text style={{ ...styles.text, alignSelf: 'flex-end' }}>{ `${props.CCInfo?.expiry?.month}/${props.CCInfo?.expiry?.year}` }</Text>
                    </View>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}> {props.CCInfo?.cardHolderName?.toUpperCase()}</Text> 
                    </View>
                </ImageBackground>
                <Image source={require('../../assets/payment_card_grey.png')} style={styles.card} />
            </View>
            <View style={styles.inputContainer}>
                <Input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={text => setAddress(text)} placeholder="Address *" />
                <Input  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={text => setBankName(text)} placeholder="Name of Bank *" />
                <Input  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={text => setRoutingNumber(text)} maxLength={9} placeholder="9 Digit Routing Number *" />
                <Input  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} onChangeText={text => setAccountNumber(text)} placeholder="Account Number *" />
                <TouchableOpacity onPress={DirectDeposit} style={styles.button}>
                    <Text style={styles.btnText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    saveCC: (CCInfo) => dispatch({
        type: ActionTypes.UPDATE_CC, payload: {
        CCInfo
        }
    }),
})
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);