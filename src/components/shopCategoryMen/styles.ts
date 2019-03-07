import { StyleSheet } from 'react-native';
import { fonts, metrics, colors } from '@themes';

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        flexDirection:'row',
        height: 45,
        backgroundColor: "#f2f2f2",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 1.5,
        shadowOpacity: 1
    },
    allProducts: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    allProductsText: {
        fontSize: fonts.fontSizeFormat(12),
        color: 'rgb(71,164,172)'
    },
    productSliderText: {
        fontSize: fonts.fontSizeFormat(14),
        color: "#454545"
    },
    overlay: {
        padding: 20,
        position: 'absolute',
        right: 0,
        opacity: 0.5,
        backgroundColor: 'rgba(255,255,255,0)',
        width: 20
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: colors.white
    },
    productImage: {
        width: metrics.screenWidth/4,
        height: metrics.screenWidth/4,
        backgroundColor: '#bfbfbf'
    },
    priceContainer: {
        marginTop: 5,
        flexDirection: 'row',
    },
    productTitleText: {
        fontSize: fonts.fontSizeFormat(15),
        letterSpacing: 0,
        color: "#454545"
    },
    originalPrice: {  
        fontSize: fonts.fontSizeFormat(13),
        letterSpacing: 0,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: "#999999"
    },
    slashedPrice: {
        marginLeft:10,
        fontWeight: fonts.fontWeight.bold,
        fontSize: fonts.fontSizeFormat(13),
        letterSpacing: 0,
        color: "#454545"
    },
    labelContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position:'absolute',
        bottom: 0,
        right: 0,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    productTitleWidth: {
        width: metrics.screenWidth/2
    },
    labelNewProduct: {
        backgroundColor: "#b0d39b"
    },
    labelSaleProduct: {
        backgroundColor: colors.maize
    },
    labelText: {
        fontSize: fonts.fontSizeFormat(12),
        fontWeight: fonts.fontWeight.bold,
        textAlign: "center",
        color: colors.white
    },
    separator: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: "#bfbfbf"
    },
})
export default styles;