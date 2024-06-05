import { Link } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

export interface AnnouncementItemProps {
  image?: string;
  title: string;
  desc: string;
  action?: string;
  screen?: string;
  screenParams?: Record<string, unknown>;
}
export const AnnouncementItem: FC<AnnouncementItemProps> = ({
  image,
  title,
  desc,
  action,
  screen,
  screenParams,
}) => {
  return (
    <View style={styles.pagerItem}>
      {!!image && <Image src={image} style={styles.pagerImage} />}
      <View style={styles.pagerContent}>
        <View>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 16,
              fontFamily: 'Inter-SemiBold',
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 10,
              fontFamily: 'Inter-SemiBold',
            }}
          >
            {desc}
          </Text>
        </View>
        {!!action && !!screen && (
          <Link
            to={{ screen: screen as never, params: screenParams as never }}
            style={styles.pagerLink}
          >
            {action}
          </Link>
        )}
      </View>
    </View>
  );
};

const MOCK_ANNOUNCEMENTS = [
  {
    uuid: 'MOCK_ANN_1',
    image: '',
    title: 'All about your new virtual pet!',
    desc: 'A friendly companion to journey with you in your quest for a healthier you!',
    action: 'Find out more',
    screen: 'A',
  },
  {
    uuid: 'MOCK_ANN_2',
    image: '',
    title: 'We want to know you better!',
    desc: 'Share your thoughts about healthier habits through a short questionnaire',
    action: 'Complete now',
    screen: 'B',
  },
];

export const Announcements = () => {
  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerContainer} initialPage={0}>
        {MOCK_ANNOUNCEMENTS.map((annProps) => (
          <AnnouncementItem {...annProps} key={annProps.uuid} />
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ...
  },
  pagerContainer: {
    minHeight: 150,
    width: '100%',
  },
  pagerItem: {
    display: 'flex',
    maxWidth: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderStyle: 'solid',
    borderColor: '#75B5F5',
    borderWidth: 2,
  },
  pagerImage: {
    flex: 1,
    backgroundColor: '#75B5F5',
    height: '100%',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  pagerContent: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  pagerLink: {
    textAlign: 'right',
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#4995e1',
  },
});

export default Announcements;
