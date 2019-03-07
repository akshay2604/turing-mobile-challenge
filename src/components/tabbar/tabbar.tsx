import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Polygon } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { AppText } from '@components';
import styles from './styles';

class Tabbar extends Component {
  render() {
    return (
      <View style={styles.tabContainer}>
        {/* <LinearGradient colors={['rgb(255,255,255)', 'rgb(222,222,222)']}> */}

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ justifyContent: 'space-evenly' }}>
            <ShopIcon />
            <AppText style={styles.tabText}>Shop</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'space-evenly' }}>
            <MaterialCommunityIcon
              name="lightbulb-on-outline"
              size={25}
              color="#454545"
            />
            <AppText style={styles.tabText}>Inspiration</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartBagContainer}>
            <View>
              <LinearGradient
                colors={['rgb(255,255,255)', 'rgb(217,217,217)']}
                style={styles.cartCircleRing}
              />
              <LinearGradient
                colors={['rgb(255,255,255)', 'rgb(217,217,217)']}
                style={styles.cartCircle}
              >
                <View style={styles.shoppingBag}>
                  <Icon name="shopping-bag" size={25} />
                </View>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: 'space-evenly', marginLeft: 40 }}
          >
            <EvilIcon name="location" size={25} color="#454545" />
            <AppText style={styles.tabText}>Stores</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={{ justifyContent: 'space-evenly' }}>
            <IonIcon name="ios-more" size={25} color="#454545" />
            <AppText style={styles.tabText}>More</AppText>
          </TouchableOpacity>
        </View>
        {/* </LinearGradient> */}
      </View>
    );
  }
}

const ShopIcon = () => (
  <Svg height="40" width="45">
    <Polygon
      points="20,10 20,20 10,26 0,20 0,10 10,4"
      fill="transparent"
      scale="1.2"
      stroke="#454545"
      origin="-5,-1"
      strokeWidth="1.5"
    />
    <Polygon
      points="20,10 20,20 10,26 0,20 0,10 10,4"
      fill="#454545"
      scale="0.6"
      stroke="#454545"
      strokeWidth="3"
      origin="18,22"
    />
  </Svg>
);
export default Tabbar;
