import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/EvilIcons';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AppText, CategoryBanner } from '@components';

class ShopCategoryWomen extends Component {
  render() {
    const categories = [
      {
        itemName: 'Jeans'
      },
      {
        itemName: 'TShirts'
      },
      {
        itemName: 'Shoes'
      },
      {
        itemName: 'Accessories'
      }
    ];
    const productCatalog = [
      {
        productTitle: 'WOMEN ULTRA LIGHT DOWN JACKET',
        originalPrice: '$120.00',
        slashedPrice: '$110.50',
        label: 'NEW'
      },
      {
        productTitle: 'WOMEN ULTRA LIGHT DOWN LONG COAT',
        originalPrice: '$120.00',
        slashedPrice: '$110.50',
        label: 'SALE'
      },
      {
        productTitle: 'WOMEN ULTRA LIGHT DOWN SHAWL COLLAR COAT',
        originalPrice: '$120.00',
        slashedPrice: '$110.50',
        label: 'NEW'
      },
      {
        productTitle: 'WOMEN ULTRA LIGHT DOWN SQUARE PACKED JACKET',
        originalPrice: '$120.00',
        slashedPrice: '$110.50',
        label: 'SALE'
      },
      {
        productTitle: 'URBAN U TOP WOMEN JACKET',
        originalPrice: '$120.00',
        slashedPrice: '$110.50',
        label: 'NEW'
      }
    ];
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
        <CategoryBanner type="women" />
        <ProductCategorySlider categories={categories} />
        <ProductCatalog
          productCatalog={productCatalog}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}

const ProductCategorySlider = ({ categories }) => {
  return (
    <View style={styles.sliderContainer}>
      <View style={styles.allProducts}>
        <AppText style={[styles.allProductsText, { color: '#d8774c' }]}>
          All Products
        </AppText>
      </View>
      <View
        style={{
          flex: 9,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FlatList
          data={categories}
          horizontal
          //   disableVirtualization
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.itemName}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ justifyContent: 'space-around', marginHorizontal: 10 }}
            >
              <AppText style={styles.productSliderText}>
                {item.itemName}
              </AppText>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.overlay} />
    </View>
  );
};
const ProductCatalog = ({ productCatalog, navigation }) => (
  <View>
    <FlatList
      data={productCatalog}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={item => item.productTitle}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.productContainer}
          onPress={() => navigation.navigate('ProductDetail')}
        >
          <View>
            <View style={styles.productImage} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={styles.productTitleWidth}>
              <AppText style={styles.productTitleText}>
                {item.productTitle}
              </AppText>
            </View>
            <View style={styles.priceContainer}>
              <AppText style={styles.originalPrice}>
                {item.originalPrice}
              </AppText>
              <AppText style={styles.slashedPrice}>{item.slashedPrice}</AppText>
            </View>
          </View>
          <View
            style={[
              item.label === 'NEW'
                ? styles.labelNewProduct
                : styles.labelSaleProduct,
              styles.labelContainer
            ]}
          >
            <AppText style={styles.labelText}>{item.label}</AppText>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default ShopCategoryWomen;
