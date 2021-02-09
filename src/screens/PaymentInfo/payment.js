import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Input } from '../../components';
import { ActionTypes } from '../../constants';
import { colors } from '../../theme/theme';
import { styles, width, height } from './styles';
import {connect} from 'react-redux'
import { CreateUserWithEmail } from '../../firebase/user';

const App = (props) => {
    const [cardNumber, setCardNumber] = useState(["", "-", "", "-", "","-",""])
    const [cardHolderName, setCCHolderName] = useState("");
    const [formattedCCNumber, setFormattedCCNumber] = useState([]);
    const [alignment] = useState(new Animated.Value(0));
    const [inFocus, setFocus] = useState(false);
    const [CCExipiryMonth, SetCCExpiryMonth] = useState("");
    const [CCExpiryYear, SetCCEXpiryYear] = useState("");
    const [CVV, SetCVV] = useState("");
    const _ref_0 = useRef(null);
    const _ref_1 = useRef(null);
    const _ref_2 = useRef(null);
    const _ref_3 = useRef(null);
    const _ref_4 = useRef(null);
    const _ref_5 = useRef(null);
    

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

    const FormatCCNumber = () => setFormattedCCNumber(cardNumber.join(""));

    const setCardValue = (value, index) => {
        switch (index) {
            case 0:
                cardNumber[0] = value;
                if (cardNumber[0].length == 4) _ref_1?.current.focus();
                break;
            case 1:
                cardNumber[2] = value;
                if (cardNumber[2].length == 4) _ref_2?.current.focus();
                break;
            case 2:
                cardNumber[4] = value;
                if (cardNumber[4].length == 4) _ref_3?.current.focus();
                break;
            case 3:
                cardNumber[6] = value;
                if (cardNumber[6].length == 4) FormatCCNumber()
                break;
            default: return
        }
    } 


    const SaveCreditCard = async () => {
        // Save Card in Redux
        props.saveCC({cardHolderName, cardNumber, CVV, expiry: {month: CCExipiryMonth, year: CCExpiryYear}})
        // Register User into Database
        const user = await CreateUserWithEmail(props.draftAccount);

        // Go Back to Login Screen (On Registeration Success)
        props.navigation.navigate("login");
    }


    const SetExpiry = (value, index) => {
        switch (index) {
            case 0:
                if (+value > 0 && +value <= 12) SetCCExpiryMonth(value);

                if (value.length == 2 && +value <= 12 && +value > 0) _ref_5.current.focus();
                break;
            case 1:
                if (value >= new Date().getUTCFullYear() && value <= new Date().getUTCFullYear() + 10) SetCCEXpiryYear(value);
                break;
            default: return;
        }
    }


    return (
        <Animated.View style={[styles.container, ScreenLayout]}>
            <View style={[styles.cardsContainer]}>
                <Image style={styles.card} source={require('../../assets/payment_card_grey.png')} />
                <ImageBackground resizeMethod="scale" source={require('../../assets/payment_card.png')} style={styles.paymentCard}>
                    <View style={ styles.numberContainer }>
                        <Text style={{ ...styles.text, width: '37%' }}>{ props.CCInfo?.cardNumber || formattedCCNumber }</Text>
                    </View>
                    <View style={styles.expContainer}>
                        <Text style={{ ...styles.text, alignSelf: 'flex-end' }}>{ props.CCInfo ? `${props.CCInfo?.expiry.month}/${props.CCInfo?.expiry.year}` : `${CCExipiryMonth}/${CCExpiryYear}` }</Text>
                    </View>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.balance}> {props.CCInfo?.cardHolderName?.toUpperCase() || cardHolderName.toUpperCase() }</Text> 
                    </View>
                </ImageBackground>
                <Image source={require('../../assets/payment_card_grey.png')} style={styles.card} />
            </View>
            <View style={styles.inputContainer}>
                <Input placeholder="Card Holder Name *" onChangeText={text => setCCHolderName(text)} maxLength={20} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}/ >
                <Text style={styles.secondaryText}>Card Number</Text>
                <View style={{flexDirection: "row"}}>
                    <Input placeholder="XXXX" keyboardType="numeric" maxLength={4} innerRef={_ref_0} onChangeText={(text) => setCardValue(text, 0)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                    <Input placeholder="XXXX" keyboardType="numeric" maxLength={4} innerRef={_ref_1} onChangeText={(text) => setCardValue(text, 1)}  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                    <Input placeholder="XXXX" keyboardType="numeric" maxLength={4} innerRef={_ref_2 } onChangeText={(text) => setCardValue(text, 2)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                    <Input placeholder="XXXX" keyboardType="numeric" maxLength={4} innerRef={_ref_3} onChangeText={(text) => setCardValue(text, 3)}  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: "row", alignItems: 'center' }}>
                   <View style={{flex: 0.5, alignItems: 'center'}}><Text style={styles.secondaryText}>Expiry</Text></View>
                    <Input placeholder="MM" keyboardType="numeric" maxLength={2} innerRef={_ref_4} onChangeText={(text) => SetExpiry(text, 0)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                    <Input placeholder="YYYY" keyboardType="numeric" maxLength={4} innerRef={_ref_5} onChangeText={(text) => SetExpiry(text, 1)}  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                </View>
                <View style={{ justifyContent: 'flex-end', flexDirection: "row", alignItems: 'center' }}>
                   <View style={{flex: 0.5, alignItems: 'center'}}><Text style={styles.secondaryText}>CVV</Text></View>
                    <Input placeholder="XXX" keyboardType="numeric" maxLength={3}  onChangeText={(text) => SetCVV(text)}  onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{marginHorizontal: 5}} padding={10} radius={5} ContainerWidth={width / 5} />
                </View>
                <TouchableOpacity onPress={SaveCreditCard} style={styles.button}>
                    <Text style={styles.btnText}>SAVE</Text>
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