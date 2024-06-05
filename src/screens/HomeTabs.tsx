import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Explore } from './Explore';
import { Home } from './Home';
import { Profile } from './Profile';
import { Rewards } from './Rewards';

export type RootTabParamList = {
  Home: Record<string, never>;
  Explore: Record<string, never>;
  Rewards: Record<string, never>;
  Profile: Record<string, never>;
};

const DISABLED_TAB = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabPress: (e: any) => {
    // Prevent default action
    e.preventDefault();
  },
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
        let iconName: any = '';

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Explore':
            iconName = 'compass';
            break;
          case 'Rewards':
            iconName = 'gift';
            break;
          case 'Profile':
            iconName = 'person-circle';
            break;
          default:
            break;
        }

        if (iconName && focused) {
          iconName += '-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#1C83E0',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarLabelStyle: styles.tabLabel,
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Explore" component={Explore} listeners={DISABLED_TAB} />
    <Tab.Screen name="Rewards" component={Rewards} listeners={DISABLED_TAB} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    marginBottom: 2,
  },
});

export default HomeTabs;
