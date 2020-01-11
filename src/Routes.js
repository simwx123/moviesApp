import MainScreen from "./main/main";
import SecondScreen from "./second/second";
import {
  createAppContainer,
  createStackNavigator,
  NavigationRouteConfig,
} from 'react-navigation';
import routes from './routes/routes';

const Routes = createStackNavigator({
  [routes.MOVIE]: {
    screen: MainScreen,
    navigationOptions: ({ navigation }: NavigationRouteConfig) => ({
      header: null,
    }),
  },
  [routes.MOVIEDETAILS]: {
    screen: SecondScreen,
    navigationOptions: ({ navigation }: NavigationRouteConfig) => ({
      header:null,
    }),
  },
});


export default createAppContainer(Routes);
