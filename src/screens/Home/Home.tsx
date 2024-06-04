import { Ionicons } from '@expo/vector-icons';
import { useContext } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import { UserContext } from '../../contexts/UserContext';

export const Home = () => {
  const userProfile = useContext(UserContext);

  return (
    <View
      style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}
    >
      <View
        style={{
          backgroundColor: '#1C83E0',
          width: '100%',
          height: '15%',
          padding: 16,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Inter-SemiBold',
          }}
        >
          Hello, {userProfile.name}!
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#FFFFFF',
            borderRadius: 4,
            position: 'absolute',
            width: '100%',
            margin: 16,
            alignItems: 'center',
            height: 74,
            top: 85,
            left: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
          }}
        >
          <TouchableHighlight
            style={{
              width: '30%',
              paddingVertical: 16,
              paddingHorizontal: 8,
            }}
            onPress={() => {}}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Ionicons name="heart-circle-outline" size={24} />
              <Text>My Healthpoints</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{ width: '30%', paddingVertical: 16, paddingHorizontal: 8 }}
            onPress={() => {}}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Ionicons name="qr-code-outline" size={22} />
              <Text>Scan Receipt</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              width: '30%',
              paddingVertical: 16,
              paddingHorizontal: 8,
            }}
            onPress={() => {}}
          >
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Ionicons name="gift" size={24} />
              <Text>My Rewards</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Home;
