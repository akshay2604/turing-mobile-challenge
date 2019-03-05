import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../components/home';

const AppNavigator = createStackNavigator({
    Home: {
      screen: Home,
    },
  });

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
