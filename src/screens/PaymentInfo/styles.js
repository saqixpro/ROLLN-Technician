import { Dimensions, Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/theme";

export const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: height / 20,
        backgroundColor: colors.background
    },
    text: {
        color: colors.textColor
    },
    cardsContainer: {
        flexDirection: 'row',
    },
    card: {
        // width: width / 1.7,
        // height: width / 1.3,
        flex: 0.2,
        marginHorizontal: 5,
    },
    paymentCard: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    balance: {
        fontSize: 18,
        fontWeight: '300',
        letterSpacing: 3
    },
    numberContainer: {
        flex: 0.4,
        padding: 10
    },
    expContainer: {
        flex: 0.4
    },
    balanceContainer: {
        flex: 0.5,
        justifyContent: 'flex-end',
        padding: 10
    },
    inputContainer: {
        height,
        padding: 10,
        backgroundColor: colors.background_secondary
    },
    button: {
        backgroundColor: colors.button_primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Platform.OS == 'android' ? 10 : 15,
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center'
    },
    btnText: {
        fontSize: 16,
        fontWeight: '600'
    },
    secondaryText: {
        color: colors.light_gray
    }
})