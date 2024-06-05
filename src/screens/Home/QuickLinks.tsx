import { Ionicons } from '@expo/vector-icons';
import { Link } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { shadows } from '../../styles/shadows';

export interface LinkItemProps {
  iconName: string;
  label: string;
  screen: string;
  screenParams?: Record<string, unknown>;
}

export const LinkItem: FC<LinkItemProps> = ({
  iconName,
  label,
  screen,
  screenParams,
}) => {
  return (
    <View style={styles.linkContainer}>
      <Link
        to={{
          screen: (screen || 'Home') as never,
          params: screenParams as never,
        }}
      >
        <View style={styles.linkItem}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Ionicons name={iconName as any} size={28} style={styles.linkIcon} />
          <Text style={styles.linkLabel}>{label}</Text>
        </View>
      </Link>
    </View>
  );
};
export const QuickLinks = () => {
  return (
    <View style={styles.container}>
      <LinkItem
        iconName="fast-food-outline"
        label="Log My Meals"
        screen="" // "MealLog"
      />
      <LinkItem
        iconName="cart-outline"
        label="Log Groceries"
        screen="" // "GroceriesLog"
      />
      <LinkItem
        iconName="document-text-outline"
        label="Log Nutrition"
        screen="" // "NutritionLog"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 16,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '28%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    ...shadows.card,
  },
  linkItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkIcon: {
    margin: 4,
  },
  linkLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    width: '100%',
  },
});

export default QuickLinks;
