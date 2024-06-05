import { Link } from '@react-navigation/native';
import React, { FC, JSXElementConstructor } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

import Pawprint from '../../../assets/images/Pawprint.svg';
import Standing from '../../../assets/images/Standing.svg';
import { shadows } from '../../styles/shadows';

export interface AnnouncementItemProps {
  image?: string | JSXElementConstructor<Record<string, unknown>>;
  title: string;
  desc: string;
  action?: string;
  screen?: string;
  screenParams?: Record<string, unknown>;
}

export const AnnouncementItem: FC<AnnouncementItemProps> = ({
  image: PageImage,
  title,
  desc,
  action,
  screen,
  screenParams,
}) => {
  return (
    <View style={styles.pagerItem}>
      {typeof PageImage === 'string'
        ? !!PageImage && <Image src={PageImage} style={styles.pagerImage} />
        : !!PageImage && (
            <PageImage style={styles.pagerImage} height={120} width={120} />
          )}
      <View style={styles.pagerContent}>
        <View>
          <Text
            style={styles.pagerTitle}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text style={styles.pagerDesc} numberOfLines={2} ellipsizeMode="tail">
            {desc}
          </Text>
        </View>
        {!!action && (
          <Link
            to={{
              screen: (screen || 'Home') as never,
              params: screenParams as never,
            }}
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
    image: Pawprint,
    title: 'All about your new virtual pet!',
    desc: 'A friendly companion to journey with you in your quest for a healthier you!',
    action: 'Find out more',
    screen: '',
  },
  {
    uuid: 'MOCK_ANN_2',
    image: Standing,
    title: 'We want to know you better!',
    desc: 'Share your thoughts about healthier habits through a short questionnaire',
    action: 'Complete now',
    screen: '',
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
    display: 'flex',
    minHeight: 138,
    width: '100%',
  },
  pagerItem: {
    display: 'flex',
    maxWidth: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#75B5F5',
    borderWidth: 2,
    overflow: 'hidden',
    ...shadows.card,
  },
  pagerImage: {
    flex: 1,
    backgroundColor: '#75B5F5',
    height: 120,
    width: 120,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  pagerContent: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    height: '100%',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 4,
  },
  pagerLink: {
    textAlign: 'right',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4995e1',
    marginTop: 8,
  },
  pagerTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 8,
  },
  pagerDesc: {
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
});

export default Announcements;
