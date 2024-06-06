import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { shadows } from '../../styles/shadows';
import { formatNumberWithCommas } from '../../utils/formatter';

export interface StatBoxProps {
  unit: string;
  value: number;
  goal: number;
  label: string;
  iconName: string;
  color: string;
}

export const StatBox: FC<StatBoxProps> = ({
  unit,
  value,
  goal,
  label,
  iconName,
  color,
}) => {
  const percent = (value / goal) * 100;
  return (
    <View style={styles.statBox}>
      <View style={styles.statGroup}>
        <Text style={styles.statText}>{label}</Text>
        <Text
          style={styles.statValue}
        >{`${formatNumberWithCommas(value)} / ${formatNumberWithCommas(goal)} ${unit}`}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={[styles.iconBox, { backgroundColor: color }]}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Ionicons name={iconName as any} size={16} color={'white'} />
        </View>
        <View
          style={[
            styles.progressBar,
            {
              backgroundColor: color,
              width: `${percent >= 100 ? 100 : percent}%`,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    ...shadows.card,
  },
  statGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  statText: {
    fontSize: 12,
    fontFamily: 'Inter-ExtraBold',
    marginBottom: 4,
    color: '#333333',
  },
  statValue: {
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
    color: '#333333',
    textAlign: 'right',
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    marginTop: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
    marginLeft: -28,
  },
  iconBox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 16,
    zIndex: 1,
  },
});

export default StatBox;
