import {StyleSheet} from 'react-native';
import {colors, fonts, metrics} from '@themes';

const styles = StyleSheet.create({
    infoBannerContainer: {
        flexDirection: 'row',
        backgroundColor: colors.bannerBg,
        padding: 10
    },
    bannerHighlightText: {
        fontSize: fonts.fontSizeFormat(12),
        color: colors.linkText,
        fontFamily: fonts.fontType.regular
    },
    linkText: {
        fontSize: fonts.fontSizeFormat(12),
        color: colors.linkText,
        fontFamily: fonts.fontType.bold,
        fontWeight: fonts.fontWeight.bold,
    },
    infoText: {
        fontSize: fonts.fontSizeFormat(12),
        color: colors.bannerText
    },
    productFeedContainer: {
        backgroundColor: colors.white
    },
    feedItemContainer: {
        alignItems: 'center',
        paddingTop: 15,
    },
    title: {
        letterSpacing: 3,
        fontFamily: fonts.fontType.bold,
        fontSize: fonts.fontSizeFormat(12),
        fontWeight: fonts.fontWeight.bold,
        color: colors.bannerBg
    },
    subtitle: {
        fontFamily: fonts.fontType.light,
        fontSize: fonts.fontSizeFormat(24),
        fontWeight: fonts.fontWeight.light,
        color: colors.bannerBg
    },
    productImageContainer: {
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: colors.navBg,
        height: metrics.screenHeight / 4.4, // 151
        width: '90%',
    },
    shopNowLabel: {
        padding: 13,
        width: 119,
        height: 43,
        backgroundColor: colors.maize,
        position: 'absolute',
        top: '38%',
        right: -15,
        borderRadius: 3
    },
    shopNowText: {
        letterSpacing: 3,
        fontFamily: fonts.fontType.bold,
        fontSize: fonts.fontSizeFormat(10),
        fontWeight: fonts.fontWeight.bold,
        color: colors.white,
    }
})
export default styles;