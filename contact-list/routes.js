import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';

const StackNavigator = createStackNavigator(
    {
        Contacts,
        Profile,
        Favorites,
    },
    {
        initialRouteName: 'Favorites',
    }
);

export default createAppContainer(StackNavigator);