import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useContext, useMemo } from 'react';
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { RootStackParamList } from '../../../App';
import { StatBox } from '../../components/StatBox';
import { StatsContext } from '../../contexts/StatsContext';
import { shadows } from '../../styles/shadows';

const VirtualPet = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();

  const { calories, steps, mvpa, sleep } = useContext(StatsContext);

  // 4 states so far: hungry, neutral, full, walk
  const petState = useMemo(() => {
    // full
    if (calories >= 1800) {
      return 'FULL';
    }

    // hungry
    if (calories <= 900) {
      return 'HUNGRY';
    }

    // walk
    if (steps >= 5000) {
      return 'WALK';
    }

    return 'NEUTRAL';
  }, [calories, steps]);

  const lottiePet = useMemo(() => {
    switch (petState) {
      case 'FULL':
        return require('../../../assets/lottie/ottie/full.json');
      case 'HUNGRY':
        return require('../../../assets/lottie/ottie/hungry.json');
      case 'WALK':
        return require('../../../assets/lottie/ottie/walk.json');
      default:
        return require('../../../assets/lottie/ottie/neutral.json');
    }
  }, [petState]);

  const navigateToFullScreen = useCallback(() => {
    navigator.navigate('VirtualPetFull', {});
  }, [navigator]);

  return (
    <View style={styles.virtualPetSection}>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback
          style={styles.imageSection}
          onPress={navigateToFullScreen}
        >
          <View style={styles.lottieContainer}>
            <LottieView
              source={lottiePet}
              autoPlay
              loop
              style={styles.lottiePet}
            />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          style={styles.imageSection}
          onPress={navigateToFullScreen}
        >
          <Image
            source={require('../../../assets/images/livingroomfinal.png')}
            style={styles.petImage}
          />
        </TouchableWithoutFeedback>
        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <Ionicons name={'settings-outline'} size={24} color={'#FFFFFF'} />
          </View>
          <View style={styles.iconBox}>
            <Ionicons name={'medkit-outline'} size={24} color={'#FFFFFF'} />
          </View>
          <View style={styles.iconBox}>
            <Ionicons name={'shirt-outline'} size={24} color={'#FFFFFF'} />
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <StatBox
          unit="cal"
          value={calories}
          goal={1800}
          label="Calories"
          iconName="restaurant-outline"
          color="#6C63FF"
        />

        <StatBox
          unit=""
          value={steps}
          goal={5000}
          label="Steps"
          iconName="walk-outline"
          color="#1DA1F2"
        />

        <StatBox
          unit="mins"
          value={mvpa}
          goal={30}
          label="MVPA"
          iconName="bicycle-outline"
          color="#FFD700"
        />

        <StatBox
          unit="hours"
          value={sleep}
          goal={8}
          label="Sleep"
          iconName="moon-outline"
          color="#4CAF50"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  virtualPetSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    maxWidth: '100%',
    alignItems: 'flex-start',
    ...shadows.card,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    display: 'flex',
    marginTop: 16,
    marginHorizontal: 16,
    height: '100%',
    borderCurve: 'circular',
  },
  imageSection: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: 230,
    top: -7,
    position: 'relative',
  },
  petImage: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
    top: '20%',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '60%',
  },
  iconBox: {
    backgroundColor: '#5b5b5b',
    opacity: 20,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  statsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    gap: 8,
  },

  lottieContainer: {
    flex: 1,
    zIndex: 99,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottiePet: {
    width: 200,
    height: 150,
    marginTop: 250,
  },
});

export default VirtualPet;
