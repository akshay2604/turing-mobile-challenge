import { StyleSheet, Platform} from 'react-native';
import { fonts, metrics, colors } from '@themes';

const IS_IOS = Platform.OS === 'ios';

function wp(percentage: number) {
    const value = (percentage * metrics.screenWidth) / 100;
    return Math.round(value);
}

const slideHeight = metrics.screenHeight * 0.36;
// const sliderWidth = metrics.screenWidth;
const itemHorizontalMargin = wp(2);
const slideWidth = wp(75);
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const entryBorderRadius = 8;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 65,
        backgroundColor: "#f2f2f2",
        paddingLeft: 14,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    headerTitleText: {
        fontSize: fonts.fontSizeFormat(15),
        width: metrics.screenWidth/1.21,
        color: "#454545"
    },
    productDisplayContainer: {
        height: metrics.screenHeight/1.79
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    dotContainerStyle: {
        width: 30,
        height: 30,
        transform: [{ rotateZ: '45deg'}],
        backgroundColor: "#d8d8d8",
        // borderRadius: 4,
        marginHorizontal: 8
    },
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius
    },
    imageContainer: {
        flex: 1,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    imageContainerEven: {
        backgroundColor: 'black'
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: 'black'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius
    },
    textContainer: {
        justifyContent: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    textContainerEven: {
        backgroundColor: 'black'
    },
    title: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 6,
        color: 'gray',
        fontSize: 12,
        fontStyle: 'italic'
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    productDescription: {
        marginTop: '4.1%',
        minHeight: '14.1%',
        width: metrics.screenWidth/1.01,
        backgroundColor: "#f2f2f2",
        padding: 15
    },
    productDescriptionText: {
        fontSize: fonts.fontSizeFormat(15),
        color: "#454545"        
    },
    footerContainer: {
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        shadowColor: "rgba(0, 0, 0, 0.15)",
        shadowOffset: {
            width: 0,
            height: -1
        },
        shadowRadius: 1.5,
        shadowOpacity: 1,
        justifyContent: 'space-between',
        bottom: 0,
        width: metrics.screenWidth,
        height: metrics.screenHeight/12.90,
        paddingHorizontal: 6
    },
    customizeButtonContainer: {
        borderColor: 'gray',
        borderRightWidth: 0.3,
        padding: 15,
        justifyContent: 'center',
        // opacity: 0.6,
        backgroundColor: "rgb(248,248,248)"
    },
    customizeText: {
        fontSize: fonts.fontSizeFormat(12),
        color: "#454545"
    },
    priceContainer: {

    },
    originalPrice: {
        fontSize: fonts.fontSizeFormat(13),
        color: "#999999",
        textAlign: "right",
        letterSpacing: 0,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    slashedPrice: {
        fontSize: fonts.fontSizeFormat(18),
        fontWeight: fonts.fontWeight.bold,
        textAlign: "right",
        color: "#454545"
    },

    addToCartContainer: {
        width: 320/2.56,
        height: metrics.screenHeight/18.93,
        borderRadius: 2,
        // padding: 15,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: colors.maize
    },
    addToCartText: {
        fontSize: fonts.fontSizeFormat(12),
        fontWeight: fonts.fontWeight.bold,
        letterSpacing: 3,
        textAlign: "center",
        color: colors.white

    }
})
export default styles;