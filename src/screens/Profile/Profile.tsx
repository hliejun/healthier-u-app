import { Text, View } from 'react-native';

export const Profile = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Header</Text>
      <Text>Select / Reset User Profile</Text>
      <Text>Select / Reset Mission Profile</Text>
      <Text>Set Access Token</Text>
    </View>
  );
};

export default Profile;
