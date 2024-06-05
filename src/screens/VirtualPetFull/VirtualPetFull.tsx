import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View } from 'react-native';

export const VirtualPetFull = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Virtual Pet Full</Text>
      <LottieView
        source={require('../../../assets/lottie/ottie/walk.json')}
        style={{ width: '100%', height: '50%' }}
        autoPlay
        loop
      />
    </View>
  );
};

export default VirtualPetFull;
