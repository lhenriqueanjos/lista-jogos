import { StackNavigator } from 'react-navigation';

import AboutContainer from '../containers/AboutContainer';
import HomeContainer from '../containers/HomeContainer';

const Routes = StackNavigator({
  Home: { screen: HomeContainer },
  About: { screen: AboutContainer }
});

export default Routes;
