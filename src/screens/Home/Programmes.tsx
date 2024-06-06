import { Image, StyleSheet, Text, View } from 'react-native';

import Placeholder from '../../../assets/images/HumaaansNature.png';
import { shadows } from '../../styles/shadows';

const DEFAULT_PLACEHOLDER = Image.resolveAssetSource(Placeholder).uri;

export const Programmes = () => {
  return (
    <View style={styles.programmeCard}>
      <Image source={{ uri: DEFAULT_PLACEHOLDER }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          Workout at Singapore River
        </Text>
        <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
          Join us for a day of fun and wellness discovery!
        </Text>
      </View>
    </View>
  );
};

export default Programmes;

const styles = StyleSheet.create({
  programmeCard: {
    width: 'auto',
    height: 200,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,

    borderRadius: 8,
    ...shadows.card,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  textContainer: {
    margin: 16,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  desc: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});
