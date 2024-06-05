import { useCallback, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { RewardsContext } from '../../contexts/RewardsContext';
import { UserContext } from '../../contexts/UserContext';
import { shadows } from '../../styles/shadows';
import { Announcements } from './Announcements';
import { DashButton } from './DashButton';
import { Programmes } from './Programmes';
import { QuickLinks } from './QuickLinks';
import VirtualPet from './VirtualPet';

const SECTIONS = [
	{ label: 'ANNOUNCEMENTS', component: Announcements },
	{ label: 'MY VIRTUAL PET', component: VirtualPet },
	{ label: 'QUICK LINKS', component: QuickLinks },
	{ label: 'MY PROGRAMMES', component: Programmes },
];

export const Home = () => {
	const userProfile = useContext(UserContext);
	const rewardsProfile = useContext(RewardsContext);

	const navigateToViewHealthpoints = useCallback(() => {
		// TODO: implement
	}, []);

	const navigateToScanReceipt = useCallback(() => {
		// TODO: implement
	}, []);

	const navigateToViewRewards = useCallback(() => {
		// TODO: implement
	}, []);

	return (
		<View style={styles.screenContainer}>
			<View style={styles.bannerContainer}>
				<Text style={styles.bannerText}>Hello, {userProfile.name}!</Text>
				<View style={styles.dashContainer}>
					<DashButton
						icon="heart-circle-outline"
						iconColor="#E7451F"
						label="My Healthpoints"
						value={rewardsProfile.healthPoints}
						onPress={navigateToViewHealthpoints}
					/>
					<DashButton
						icon="qr-code-outline"
						label="Scan Receipt"
						onPress={navigateToScanReceipt}
					/>
					<DashButton
						icon="gift"
						iconColor="#1C83E0"
						label="My Rewards"
						value={rewardsProfile.rewards}
						onPress={navigateToViewRewards}
					/>
				</View>
			</View>
			<ScrollView style={styles.scrollContainer}>
				{SECTIONS.map(({ label, component: SectionComp }, index) => (
					<View
						key={label}
						style={
							index === SECTIONS.length - 1
								? styles.lastSectionContainer
								: index
									? styles.sectionContainer
									: styles.firstSectionContainer
						}
					>
						<Text style={styles.sectionLabel}>{label}</Text>
						<SectionComp />
					</View>
				))}
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

	// banner
	bannerContainer: {
		backgroundColor: '#1C83E0',
		width: '100%',
		height: 140,
		padding: 16,
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

	// dash tray
	dashContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		backgroundColor: '#FFFFFF',
		borderRadius: 4,
		position: 'absolute',
		width: '100%',
		margin: 16,
		alignItems: 'center',
		height: 74,
		top: 85,
		left: 0,
		...shadows.card,
	},

	// scroll view
	scrollContainer: {
		width: '100%',
	},

	// section
	firstSectionContainer: {
		marginTop: 48,
	},
	sectionContainer: {
		marginTop: 16,
	},
	lastSectionContainer: {
		marginTop: 24,
		marginBottom: 48,
	},
	sectionLabel: {
		fontSize: 12,
		fontFamily: 'Inter-SemiBold',
		color: '#797874',
		textTransform: 'uppercase',
		marginLeft: 16,
		// fontWeight: '700',
	},
});

export default Home;
