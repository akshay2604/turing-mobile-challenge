import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ParallaxImage } from 'react-native-snap-carousel';
import { AppText } from '@components';
import styles from './styles';
import { metrics } from '@themes';

class ProductDetail extends Component {
  render() {
    const productDetails = this.props.navigation.state.params.item;
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Header
          headerTitle={productDetails.productTitle}
          navigation={navigation}
        />
        <ProductDisplay />
        <View style={styles.productDescription}>
          <AppText>
            This down jacket is incredibly lightweight and warm. The simple
            design looks great on everyone.
          </AppText>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.customizeButtonContainer}>
            <EntypoIcon
              name={'chevron-thin-up'}
              size={10}
              style={{ alignSelf: 'center' }}
            />
            <AppText style={styles.customizeText}>CUSTOMIZE</AppText>
          </View>
          <View style={styles.priceContainer}>
            <AppText style={styles.originalPrice}>$120.00</AppText>
            <AppText style={styles.slashedPrice}>$110.50</AppText>
          </View>
          <TouchableOpacity style={styles.addToCartContainer}>
            <AppText style={styles.addToCartText}>ADD TO CART</AppText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
function wp(percentage: number) {
  const value = (percentage * metrics.screenWidth) / 100;
  return Math.round(value);
}
const Header = ({ headerTitle, navigation }) => {
  return (
    <View style={styles.header}>
      <View>
        <AppText style={styles.headerTitleText}>{headerTitle}</AppText>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="md-close" size={35} color={'#454545'} />
      </TouchableOpacity>
    </View>
  );
};
class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1
    };
  }
  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }
  render() {
    const ENTRIES1 = [
      {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
      },
      {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
      },
      {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
      },
      {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
      },
      {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
      }
    ];
    const sliderWidth = metrics.screenWidth;
    const itemHorizontalMargin = wp(2);
    const slideWidth = wp(75);
    const itemWidth = slideWidth + itemHorizontalMargin * 2;
    return (
      <View style={styles.productDisplayContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          // loop={true}
          // loopClonesPerSide={2}
          // autoplay={true}
          // autoplayDelay={500}
          // autoplayInterval={3000}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={this.state.slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          // dotColor={'rgba(255, 255, 255, 0.92)'}
          // dotContainerStyle={styles.dotContainerStyle}
          // dotElement={() => <View style={styles.dotContainerStyle} />}
          // dotStyle={styles.paginationDot}
          // inactiveDotColor={'black'}
          // inactiveDotOpacity={0.4}
          // inactiveDotScale={0.6}
          // renderDots={(activeIndex: number, total: number, context: any) => {
          //   <View style={styles.dotContainerStyle} />;
          // }}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }
}

class SliderEntry extends Component {
  get image() {
    const {
      data: { illustration },
      parallax,
      parallaxProps,
      even
    } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {}
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image source={{ uri: illustration }} style={styles.image} />
    );
  }

  render() {
    const {
      data: { title, subtitle },
      even
    } = this.props;

    const uppercaseTitle = title ? (
      <AppText
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        {title.toUpperCase()}
      </AppText>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          alert(`You've clicked '${title}'`);
        }}
      >
        <View style={styles.shadow} />
        <View
          style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        >
          {this.image}
          <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          />
        </View>
        <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}
        >
          {uppercaseTitle}
          <AppText
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            {subtitle}
          </AppText>
        </View>
      </TouchableOpacity>
    );
  }
}
export default ProductDetail;
