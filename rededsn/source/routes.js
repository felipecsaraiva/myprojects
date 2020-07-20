import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Detail from './pages/deail';
  
const AppNavigator = createStackNavigator(
    {
        Home: Main,
        Details: Detail
    },
    {
        initialRouteName: "Home"
    }
); 

export default createAppContainer(AppNavigator);
