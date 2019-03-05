import { Dimensions, StyleSheet, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 40;
const FILTER_HEIGHT = 40;
let STATUSBAR_HEIGHT;

if (Platform.OS === 'ios') {
    STATUSBAR_HEIGHT = isIphoneX() ? 30 : 20;
} else {
    STATUSBAR_HEIGHT = 0;
}

const { width, height } = Dimensions.get('window');
// Used via Metrics.baseMargin
export default {
    iPhoneXBottomMargin: 34,
    headerHeight: STATUSBAR_HEIGHT + APPBAR_HEIGHT,
    statusBarHeight: STATUSBAR_HEIGHT,
    offsetPadding: 16,
    hairlineWidth: StyleSheet.hairlineWidth,
    wrapperMargin: 5,
    appPadding: 15,
    footerBtnHeight: 50,
    basePadding: 5,
    marginHorizontal: 10,
    marginVertical: 10,
    mediumSpace: 20,
    baseMargin: 10,
    mediumMargin: 15,
    smallMargin: 5,
    narrowMargin: 2,
    screenWidth: width,
    screenHeight: height,
    buttonRadius: 4
};