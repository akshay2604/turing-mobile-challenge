import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '@themes';
import styles from './styles';
import { AppText } from '@components';

class Home extends Component {
  // static navigationOptions = {
  //   headerTitle: <AppText>Storex</AppText>,
  //   headerStyle: {
  //     backgroundColor: colors.navBg
  //   },
  //   headerLeft: (
  //     <TouchableOpacity onPress={() => alert('This is a button!')}>
  //       <Icon name="navicon" size={30} />
  //     </TouchableOpacity>
  //   )
  // };
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <InfoBanner />
        <CategoryBanner type="men" />
        <CategoryBanner type="women" />
        <ProductFeed />
      </ScrollView>
    );
  }
}

const InfoBanner = () => (
  <View style={styles.infoBannerContainer}>
    <AppText style={styles.bannerHighlightText}>LAST CHANCE! </AppText>
    <AppText style={styles.infoText}>Holiday shipping ends soon. </AppText>
    <AppText style={styles.linkText}> SHOP NOW </AppText>
  </View>
);

const CategoryBanner = ({ type }) => {
  if (type === 'men') {
    return (
      <TouchableOpacity>
        <View style={styles.categoryBannerMenWrapper}>
          <AppText style={styles.categoryBannerText1}>MEN</AppText>
          <AppText style={styles.categoryBannerText2}>OUTWEAR</AppText>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <View style={styles.categoryBannerWomenWrapper}>
        <AppText style={styles.categoryBannerText1}>WOMEN</AppText>
        <AppText style={styles.categoryBannerText2}>OUTWEAR</AppText>
      </View>
    </TouchableOpacity>
  );
};
const ProductFeed = () => (
  <View style={styles.productFeedContainer}>
    <View style={styles.feedItemContainer}>
      <AppText style={styles.title}>WINTER SALE</AppText>
      <AppText style={styles.subtitle}>UP TO 60% OFF</AppText>
      <View style={styles.productImageContainer}>
        <View style={styles.shopNowLabel}>
          <AppText style={styles.shopNowText}>SHOP NOW</AppText>
        </View>
      </View>
    </View>
  </View>
);
export default Home;
