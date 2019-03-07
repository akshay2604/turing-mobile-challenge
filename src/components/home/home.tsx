import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { colors } from '@themes';
import styles from './styles';
import { AppText, CategoryBanner } from '@components';

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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ShopCategoryMen')}
        >
          <CategoryBanner type="men" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ShopCategoryWomen')}
        >
          <CategoryBanner type="women" />
        </TouchableOpacity>
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
