import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export interface DashButtonProps {
  /* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
  icon: any;
  iconSize?: number;
  iconColor?: string;
  label: string;
  value?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

export const DashButton: FC<DashButtonProps> = ({
  icon,
  iconSize,
  iconColor,
  label,
  value,
  onPress,
}) => (
  <TouchableHighlight
    style={styles.dashButton}
    onPress={onPress}
    activeOpacity={0.7}
    underlayColor="#EFEFEF"
  >
    <View style={styles.dashContent}>
      <View style={styles.dashCount}>
        {value || value === 0 ? (
          <Text style={styles.dashValue} numberOfLines={1} ellipsizeMode="tail">
            {value}
          </Text>
        ) : null}
        <Ionicons name={icon} size={iconSize ?? 24} color={iconColor} />
      </View>
      <Text style={styles.dashLabel} numberOfLines={1} ellipsizeMode="tail">
        {label}
      </Text>
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  dashButton: {
    width: '30%',
    padding: 16,
  },
  dashContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashValue: {
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    // fontWeight: '900',
    marginRight: 8,
  },
  dashLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    paddingTop: 2,
  },
});

export default DashButton;
