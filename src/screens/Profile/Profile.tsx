import * as Clipboard from 'expo-clipboard';
import { useCallback, useContext, useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { StatsContext } from '../../contexts/StatsContext';
import { storage } from '../../services/storage';
import { shadows } from '../../styles/shadows';

export const ACCESS_TOKEN_KEY = 'token.access';

export const Profile = () => {
  const { calories, steps, mvpa, sleep, resetStats } = useContext(StatsContext);
  const [token, setToken] = useState<string>('');

  const resetHandler = useCallback(() => {
    resetStats();
  }, [resetStats]);

  const pasteHandler = useCallback(async () => {
    const text = await Clipboard.getStringAsync();
    if (text) {
      setToken(text);
    }
  }, []);

  const clearHandler = useCallback(async () => {
    setToken('');
    storage.delete(ACCESS_TOKEN_KEY);
  }, []);

  useEffect(() => {
    const storedToken = storage.getString(ACCESS_TOKEN_KEY);
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      storage.set(ACCESS_TOKEN_KEY, token);
    }
  }, [token]);

  return (
    <View style={styles.screenContainer}>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerText}>Settings</Text>
      </View>
      <ScrollView style={styles.scroller}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.contentContainer}>
              <View style={styles.titleRow}>
                <Text style={styles.cardTitle}>Current Stats</Text>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={resetHandler}
                >
                  <Text style={styles.actionButtonText}>Reset</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.cardDesc}>{`Calories: ${calories} cal`}</Text>
              <Text style={styles.cardDesc}>{`Steps: ${steps} steps`}</Text>
              <Text style={styles.cardDesc}>{`MVPA: ${mvpa} minutes`}</Text>
              <Text style={styles.cardDesc}>{`Sleep: ${sleep} hours`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.lastCardContainer}>
          <View style={styles.card}>
            <View style={styles.contentContainer}>
              <View style={styles.titleRow}>
                <Text style={styles.cardTitle}>Access Token</Text>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={pasteHandler}
                >
                  <Text style={styles.actionButtonText}>Paste</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={clearHandler}
                >
                  <Text style={styles.actionButtonText}>Clear</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.cardDesc}>{token}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // screen
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // scroller
  scroller: {
    display: 'flex',
    flexGrow: 1,
    width: '100%',
  },

  // banner
  bannerContainer: {
    backgroundColor: '#1C83E0',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 36,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 99,
  },
  bannerText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
    // fontWeight: '700',
  },

  // card
  cardContainer: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
  },
  lastCardContainer: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  card: {
    display: 'flex',
    width: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    flexDirection: 'column',
    ...shadows.card,
  },
  contentContainer: {
    display: 'flex',
  },

  titleRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
  cardDesc: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },

  actionButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1C83E0',
  },
  actionButtonText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
});

export default Profile;
