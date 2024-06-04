import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { DEFAULT_USER, UserContext } from './src/contexts/UserContext';
import { Explore } from './src/screens/Explore';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';
import { Rewards } from './src/screens/Rewards';

const Tab = createBottomTabNavigator();

export const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
  });

  return (
    <UserContext.Provider value={DEFAULT_USER}>
      <NavigationContainer>
        <StatusBar />
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
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Rewards" component={Rewards} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
