import { StyleSheet } from 'react-native';
import { fonts } from '@themes';

const styles = StyleSheet.create({
    tabContainer: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // borderColor: 'red',
        // borderWidth: 1,
        height: 60,
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        backgroundColor: 'rgb(222,222,222)'
    },
    tabText: {
        fontSize: fonts.fontSizeFormat(9),
        letterSpacing: 0,
        // textAlign: 'center',
        color: "#454545"
    },
    inspirationLogo: {
        marginTop: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
    },
    cartBagContainer: {
        position: 'absolute',
        // justifyContent: 'space-evenly',
        // bottom: 1,
        // borderColor: 'red',
        // borderWidth: 1,
        left: '43%',
        // zIndex: 1
    },
    cartCircle: {
        height: 62,
        width: 62,
        borderRadius: 31,
        left: 4.5,
        bottom: '57%',
        borderColor: 'rgb(147,147,147)',
        borderWidth: 0.3,
        shadowColor: "#ffffff",
        shadowRadius: 0,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 1
          },
    },
    cartCircleRing: {
        width: 71,
        height: 71,
        position: 'absolute',
        bottom: '50%',
        // position: 'relative',
        borderWidth: 0.3,
        borderColor: 'rgb(147,147,147)',
        borderRadius: 35.5,
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 10,
            height: 15
        },
        shadowRadius: 1.5,
        elevation: 3,
        shadowOpacity: 1

    },
    shoppingBag:{
        // position: 'relative',
        // top: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    }
})
export default styles;