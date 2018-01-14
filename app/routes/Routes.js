import { StackNavigator } from 'react-navigation';

import AboutContainer from '../containers/AboutContainer';
import HomeContainer from '../containers/HomeContainer';

export default StackNavigator({
  Home: { screen: HomeContainer },
  About: { screen: AboutContainer }
});
