import React from 'react';
import { Dimensions, StyleSheet, View , Text, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react/cjs/react.development';
import { colors } from '../../theme/theme';
import {FontAwesome} from '@expo/vector-icons'
const {width, height} = Dimensions.get('screen')


const App = (props) => {
    const stars = [0, 1, 2, 3, 4];
    const [selectedIndex, setSelectedIndex] = useState(stars.length);
    const starColor = (val) => {
        return selectedIndex >= val ? colors.button_primary : colors.gray
    }
    return (
        <View style={[styles.container, {display: props.visible ? 'flex' : 'none'}]}>
            <View style={{flex: 0.6}}>
            <Image source={require('../../assets/icons/promo.png')} style={styles.image} />
         </View>
            <View style={styles.textView}>
                <Text style={styles.heading}>Repair is Complete!</Text>
                <Text style={styles.subtext}>Rate the customer on a 5 point scale</Text>
            </View>
            <View style={styles.starsView}>
                {stars.map(star => (
                    <TouchableOpacity onPress={() => setSelectedIndex(star)} style={{marginHorizontal: '2%'}}>
                        <FontAwesome name="star" size={30} color={starColor(star)} />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{flex: 0.2}}>
                <TouchableOpacity onPress={props.onSubmit} style={styles.button}>
                    <Text style={{fontSize: 16, fontWeight: '600'}}>DONE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default App;



const styles = StyleSheet.create({
    container: {
        height: height / 2.5,
        width: width / 1.1,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.light_gray,
        alignItems: 'center',
        padding: 10,
        position: "absolute",
        top: '25%',
        left: '5%'
    },
    image: {
        transform: [
            {
              scale: 0.9
          }
      ]
    },
    heading: {
        color: colors.textColor,
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 10
    },
    subtext: {
        color: colors.light_gray,
        fontSize: 16,
        fontWeight: '500'
    },
    textView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.3
    },
    starsView: {
        flexDirection: 'row',
        marginVertical: 15,
        flex: 0.3,
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.button_primary,
        width: width / 1.3,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }
})