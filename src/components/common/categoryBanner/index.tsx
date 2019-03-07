import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, fonts } from '@themes';
import { AppText } from '@components';

const CategoryBanner = ({ type }) => {
  if (type === 'men') {
    return (
      <View style={styles.categoryBannerMenWrapper}>
        <AppText style={styles.categoryBannerText1}>MEN</AppText>
        <AppText style={styles.categoryBannerText2}>OUTWEAR</AppText>
      </View>
    );
  }
  return (
    <View style={styles.categoryBannerWomenWrapper}>
      <AppText style={styles.categoryBannerText1}>WOMEN</AppText>
      <AppText style={styles.categoryBannerText2}>OUTWEAR</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBannerMenWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.categoryBannerMenBg,
    padding: 30
  },
  categoryBannerWomenWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.categoryBannerWomenBg,
    padding: 30
  },
  categoryBannerText1: {
    fontSize: fonts.fontSizeFormat(50),
    opacity: 0.9,
    fontFamily: fonts.fontType.exlight,
    color: colors.bannerText
  },
  categoryBannerText2: {
    fontSize: fonts.fontSizeFormat(21),
    fontFamily: fonts.fontType.exlight,
    color: colors.bannerText,
    marginTop: -20
  }
});

export { CategoryBanner };
