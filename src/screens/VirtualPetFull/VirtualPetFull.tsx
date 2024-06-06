import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const VirtualPetFull = () => {
	return (
		<>
			<View style={styles.statsContainer}>
				<View style={styles.statBox}>
					<View style={styles.statGroup}>
						<Text style={styles.statText}>Calories</Text>
						<Text style={styles.statValue}>500 / 1,800</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<View style={styles.iconBoxCalories}>
							<Ionicons name={'restaurant-outline'} size={16} color={'white'} />
						</View>
						<View
							style={[
								styles.progressBar,
								{ backgroundColor: '#6C63FF', width: '27%' },
							]}
						/>
					</View>
				</View>

				<View style={styles.statBox}>
					<View style={styles.statGroup}>
						<Text style={styles.statText}>Steps</Text>
						<Text style={styles.statValue}>1,000 / 5,000</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<View style={styles.iconBoxSteps}>
							<Ionicons name={'walk-outline'} size={16} color={'white'} />
						</View>
						<View
							style={[
								styles.progressBar,
								{ backgroundColor: '#1DA1F2', width: '20%' },
							]}
						/>
					</View>
				</View>

				<View style={styles.statBox}>
					<View style={styles.statGroup}>
						<Text style={styles.statText}>MVPA</Text>
						<Text style={styles.statValue}>30 / 30 mins</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<View style={styles.iconBoxMVPA}>
							<Ionicons name={'bicycle-outline'} size={16} color={'white'} />
						</View>
						<View
							style={[
								styles.progressBar,
								{ backgroundColor: '#FFD700', width: '40%' },
							]}
						/>
					</View>
				</View>

				<View style={styles.statBox}>
					<View style={styles.statGroup}>
						<Text style={styles.statText}>Sleep</Text>
						<Text style={styles.statValue}>7 / 8 hours</Text>
					</View>
					<View style={styles.progressBarContainer}>
						<View style={styles.iconBoxSleep}>
							<Ionicons name={'moon-outline'} size={16} color={'white'} />
						</View>
						<View
							style={[
								styles.progressBar,
								{ backgroundColor: '#4CAF50', width: '75%' },
							]}
						/>
					</View>
				</View>
			</View>

			<View style={styles.header}>
				<Text style={styles.updateText}>Updated today, 11.30 AM </Text>
				<TouchableOpacity style={styles.syncButton}>
					<Text style={styles.syncText}>Sync now</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.lottieContainer}>
				<View style={styles.lottiePet}>
					<LottieView
						source={require('../../../assets/lottie/ottie/hungry otty.json')}
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
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
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
	},
	statBox: {
		width: '48%',
		marginBottom: 16,
		backgroundColor: '#FFFFFF',
		padding: 16,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	statGroup: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	statText: {
		fontSize: 12,
		fontFamily: 'Inter-Bold',
		marginBottom: 4,
		color: '#333333',
	},
	statValue: {
		fontSize: 12,
		fontFamily: 'Inter-SemiBold',
		marginBottom: 4,
		color: '#333333',
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
	},
	iconBoxCalories: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		backgroundColor: '#6C63FF',
		borderRadius: 16,
	},
	iconBoxSteps: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		backgroundColor: '#1DA1F2',
		borderRadius: 16,
	},
	iconBoxMVPA: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		backgroundColor: '#FFD700',
		borderRadius: 16,
	},
	iconBoxSleep: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
		marginRight: 4,
		backgroundColor: '#4CAF50',
		borderRadius: 16,
	},
	lottieContainer: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	lottiePet: {
		flex: 1,
	},
	otterContainer: {
		alignItems: 'center',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		padding: 16,
		top: -15,
		backgroundColor: '#F8F8F8',
		borderBottomWidth: 1,
		borderBottomColor: '#E0E0E0',
	},
	updateText: {
		fontSize: 12,
		color: '#333333',
	},
	syncButton: {
		paddingVertical: 4,
		paddingHorizontal: 8,
		backgroundColor: '#007AFF',
		borderRadius: 4,
	},
	syncText: {
		fontSize: 14,
		color: '#FFFFFF',
	},
	backgroundImage: {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: -8,
	},
	otterImage: {
		width: '100%',
		height: '70%',
		zIndex: 99,
		marginTop: 70,
	},
	otterName: {
		fontSize: 24,
		color: '#000',
		top: -6,
	},
	settingsIcon: {
		position: 'absolute',
		right: 16,
	},
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
