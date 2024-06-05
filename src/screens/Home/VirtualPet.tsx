import { StyleSheet, Text, View } from 'react-native';

export const VirtualPet = () => {
  return (
    <View style={styles.virtualPetSection}>
      <View style={styles.virtualPetContent}>
        <Text style={styles.virtualPet}>INSERT TAMACHIGO HERE!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  virtualPetSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    maxWidth: '100%',
    margin: 16,
    alignItems: 'center',
    height: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderCurve: 'circular',
  },
  virtualPetContent: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  virtualPet: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});

export default VirtualPet;
