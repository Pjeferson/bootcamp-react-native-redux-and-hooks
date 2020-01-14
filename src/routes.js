import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

export default Routes = createAppContainer(
  createStackNavigator({
    Main,
    Cart,
  })
);
