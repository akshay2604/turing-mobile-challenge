import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { AppText } from '@components';
import TabBar from '../components/tabbar';
import Home from '../components/home';
// import { colors } from '@themes';

const getHeader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 75,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
        backgroundColor: '#f2f2f2'
      }}
    >
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity onPress={() => alert('This is a button!')}>
          <Icon name="navicon" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{ marginRight: 28 }}>
        <View
          style={{
            width: 50.1,
            height: 0.9,
            borderStyle: 'solid',
            borderWidth: 1.5,
            borderColor: '#454545'
          }}
        />
        <AppText
          style={{
            width: 50.4,
            height: 25.5,
            fontFamily: 'AdventPro-Light',
            fontSize: 21.3,
            fontWeight: '300',
            fontStyle: 'normal',
            letterSpacing: 0,
            // textAlign: 'right',
            color: '#454545'
          }}
        >
          storex
        </AppText>
        <View
          style={{
            width: 50.1,
            height: 0.9,
            borderStyle: 'solid',
            borderWidth: 1.5,
            borderColor: '#454545'
          }}
        />
      </View>
      <View />
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
      // navigationOptions: () => {
      //   headerTitle: () => <AppText>Storex</AppText>;
      //   headerStyle: {
      //     backgroundColor: colors.navBg;
      //   }
      //   headerLeft: () => (
      //     <TouchableOpacity onPress={() => alert('This is a button!')}>
      //       <Icon name="navicon" size={30} />
      //     </TouchableOpacity>
      //   );
      // }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: TabBar,
    tabBarPosition: 'bottom',
    animationEnabled: true
  }
);

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: () => ({
      header: getHeader()
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
