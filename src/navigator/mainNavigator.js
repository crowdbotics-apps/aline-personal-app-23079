import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2188538Navigator from '../features/BlankScreen2188538/navigator';
import BlankScreen1186619Navigator from '../features/BlankScreen1186619/navigator';
import BlankScreen0186618Navigator from '../features/BlankScreen0186618/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2188538: { screen: BlankScreen2188538Navigator },
BlankScreen1186619: { screen: BlankScreen1186619Navigator },
BlankScreen0186618: { screen: BlankScreen0186618Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
