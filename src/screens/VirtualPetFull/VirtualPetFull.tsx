import { Ionicons } from '@expo/vector-icons';
import { formatRelative } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import React, { useCallback, useContext, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatBox } from '../../components/StatBox';
import { StatsContext } from '../../contexts/StatsContext';
import { shadows } from '../../styles/shadows';

// TODO: add tap spiral or hearts to otty

export const VirtualPetFull = () => {
  const {
    calories,
    steps,
    mvpa,
    sleep,
    timestamp,
    updateCalories,
    updateMvpa,
    updateSteps,
  } = useContext(StatsContext);

  const updateMockStats = useCallback(() => {
    updateCalories(300);
    updateMvpa(10);
    updateSteps(1000);
  }, [updateCalories, updateMvpa, updateSteps]);

  // 4 states so far: hungry, neutral, full, walk
  const petState = useMemo(() => {
    // full
    if (calories >= 1800) {
      return 'FULL';
    }

    // hungry
    if (calories < 900) {
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

  return (
    <>
      <StatusBar />
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

      <View style={styles.header}>
        <Text
          style={styles.updateText}
        >{`Updated ${formatRelative(timestamp, new Date())}`}</Text>
        <TouchableOpacity style={styles.syncButton} onPress={updateMockStats}>
          <Text style={styles.syncText}>Sync now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lottieContainer}>
        <View style={styles.lottiePet}>
          <LottieView
            source={lottiePet}
            style={styles.otterImage}
            autoPlay
            loop
          />
          <Image
            source={require('../../../assets/images/livingroomfinal.png')}
            style={styles.backgroundImage}
          />
        </View>

        <View style={styles.otterContainer}>
          <Text style={styles.otterName}>Otty</Text>
          <TouchableOpacity style={styles.settingsIcon}>
            <Ionicons name="settings-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Ionicons name="book-outline" size={24} color="#9A4AFF" />
            <Text style={styles.menuText}>Quests</Text>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="shirt-outline" size={24} color="#9A4AFF" />
            <Text style={styles.menuText}>Items</Text>
          </View>
          <View style={styles.menuItem}>
            <Ionicons name="stats-chart-outline" size={24} color="#9A4AFF" />
            <Text style={styles.menuText}>Recap</Text>
          </View>
        </View>
      </View>
    </>
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
    position: 'relative',
  },
  petImage: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
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
    backgroundColor: '#FFFFFF',
  },
  lottiePet: {
    flex: 1,
  },
  otterContainer: {
    padding: 8,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  updateText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#333333',
    marginRight: 8,
  },
  syncButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  syncText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  otterImage: {
    width: '100%',
    height: '70%',
    zIndex: 99,
    marginTop: 70,
  },
  otterName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#000',
    flexGrow: 1,
    display: 'flex',
    textAlign: 'center',
    marginLeft: 24,
  },
  settingsIcon: {},
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 14,
    color: '#333333',
    marginTop: 4,
  },
});

export default VirtualPetFull;
