import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import { DEFAULT_REWARDS, RewardsContext } from './src/contexts/RewardsContext';
import { DEFAULT_USER, UserContext } from './src/contexts/UserContext';
import { HomeTabs } from './src/screens/HomeTabs';
import { Logger } from './src/screens/Logger';
import { Missions } from './src/screens/Missions/Missions';
import { Onboarding } from './src/screens/Onboarding';
import { VirtualPetFull } from './src/screens/VirtualPetFull/VirtualPetFull';

export type RootStackParamList = {
  HomeTabs: Record<string, never>;
  Onboarding: Record<string, never>;
  VirtualPetFull: Record<string, never>;
  Missions: Record<string, never>;
  Logger: Record<
    string,
    {
      mode: 'MEAL' | 'GROCERIES' | 'NUTRITION';
    }
  >;
};

const Stack = createStackNavigator<RootStackParamList>();

export const App = () => {
  const [_fontsLoaded, _fontError] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter-ExtraBold.ttf'),
  });

  return (
    <UserContext.Provider value={DEFAULT_USER}>
      <RewardsContext.Provider value={DEFAULT_REWARDS}>
        <NavigationContainer>
          <StatusBar />
          <Stack.Navigator>
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="VirtualPetFull" component={VirtualPetFull} />
            <Stack.Screen name="Missions" component={Missions} />
            <Stack.Screen name="Logger" component={Logger} />
          </Stack.Navigator>
        </NavigationContainer>
      </RewardsContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
