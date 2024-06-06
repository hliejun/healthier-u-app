import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';

import { DEFAULT_REWARDS, RewardsContext } from './src/contexts/RewardsContext';
import { StatsContextProvider } from './src/contexts/StatsContext';
import { DEFAULT_USER, UserContext } from './src/contexts/UserContext';
import { HomeTabs } from './src/screens/HomeTabs';
import { Logger } from './src/screens/Logger';
import { Missions } from './src/screens/Missions/Missions';
import { Onboarding } from './src/screens/Onboarding';
import { Results } from './src/screens/Results/Results';
import { VirtualPetFull } from './src/screens/VirtualPetFull/VirtualPetFull';

export type RootStackParamList = {
  HomeTabs: Record<string, never>;
  Onboarding: Record<string, never>;
  VirtualPetFull: Record<string, never>;
  Missions: Record<string, never>;
  Logger: {
    mode: 'MEAL' | 'GROCERIES' | 'NUTRITION';
    title: 'Meal Log' | 'Groceries Log' | 'Nutrition Log';
  };
  Results: {
    image: string;
    result: Record<string, unknown>;
    mode: 'MEAL' | 'GROCERIES' | 'NUTRITION';
    title: 'Meal Log' | 'Groceries Log' | 'Nutrition Log';
  };
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
        <StatsContextProvider>
          <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator>
              <Stack.Screen
                name="HomeTabs"
                component={HomeTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen
                name="VirtualPetFull"
                component={VirtualPetFull}
                options={{
                  title: 'Virtual Pet',
                  headerBackTitle: ' ',
                  headerTitleStyle: {
                    fontFamily: 'Inter-SemiBold',
                  },
                }}
              />
              <Stack.Screen name="Missions" component={Missions} />
              <Stack.Screen
                name="Logger"
                component={Logger}
                options={({ route }) => ({
                  title: route.params.title as unknown as string,
                  headerBackTitle: ' ',
                  headerTitleStyle: {
                    fontFamily: 'Inter-SemiBold',
                  },
                  headerTintColor: '#FFFFFF',
                  headerStyle: {
                    shadowOpacity: 0,
                    backgroundColor: '#1F1F1F',
                    borderWidth: 0,
                    elevation: 0,
                  },
                })}
              />
              <Stack.Screen
                name="Results"
                component={Results}
                options={{
                  presentation: 'modal',
                  headerBackTitle: ' ',
                  headerTitleStyle: {
                    fontFamily: 'Inter-SemiBold',
                  },
                  headerTintColor: '#FFFFFF',
                  headerStyle: {
                    shadowOpacity: 0,
                    backgroundColor: '#1F1F1F',
                    borderWidth: 0,
                    elevation: 0,
                  },
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </StatsContextProvider>
      </RewardsContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
